<template>
  <div>
      <div class="row">
          <div class="col-md-12">
            <div class="table-cont" id="table-cont">
              <table class="table" id="tableLead">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" class="custorm-checkbox" v-model="isCheckAll" />
                    </th>
                    <template v-for="(item, props, index) in headers">
                      <template v-if="props == 'name'">
                        <th :key="index" v-show="item">{{$t(`lead.${props}`)}}</th>
                        <th :key="index+'name'"></th>
                      </template>
                      <template v-else>
                        <th :key="index" v-show="item">{{$t(`lead.${props}`)}}</th>
                      </template>
                    </template>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in leadData.data" :key="i" :value="i">
                    <td><input type="checkbox" class="custorm-checkbox" :value="item._id" v-model="ids" /></td>
                    <td v-show="headers['name']" style="min-width:50px; max-width:150px">
                      <router-link :to="`/lead/edit/${item._id}`" >
                        <span class="break-word">{{item.name}}</span>
                      </router-link>
                    </td>
                    <td>
                      <router-link :to="`/lead/edit/${item._id}`">
                        <i class="icon-pencil7"></i>
                      </router-link>
                    </td>
                    <td v-show="headers['phone']" style="min-width:150px;max-width:200px">
                      <div v-if="item.phones && item.phones.length">
                        <div v-for="(tag,k) in item.phones" :key="k" :disable-transitions="false" class="mb-4 break-word">
                          <a :href="`tel:${tag}`">{{tag}}</a> <callAction  :phone="tag" />
                        </div>
                      </div>
                    </td>
                    <td v-show="headers['email']" style="min-width:150px;max-width:200px">
                      <a v-if="item.email" :href="`mailto:${item.email }`" target="_top" class="break-word">{{item.email}}</a>
                      <span v-else>{{'Chưa có email'}}</span>
                    </td>
                    <td style="min-width:150px;max-width:200px" v-show="headers['calendar']">
                      <a class="blue--text" @click="goto(item,'calendar')">Xem lịch hẹn</a><br />

                      <a @click="plusCalendar(item._id)" class="blue--text">Thêm lịch +</a>

                    </td>
                    <td v-show="headers['noteStatus']" style="min-width:150px;max-width:200px">
                      <div class="pb-5" v-if="!permission || !permission.LEAD.edit">
                        <i class="icon-primitive-dot icon-style-custom" v-if="item.colorStatus" v-bind:style="{ color: item.colorStatus }"></i>
                        <i class="icon-heart6 icon-style-custom" v-else ></i>
                        {{item.nameStatus || 'Chưa có trạng thái'}}
                      </div>
                      <div class="pb-5" v-else>
                        <i class="icon-primitive-dot icon-style-custom" v-if="item.colorStatus" v-bind:style="{ color: item.colorStatus }"></i>
                        <i class="icon-heart6 icon-style-custom" v-else ></i>
                        <el-dropdown class="fontDefault ml-1" trigger="click" @command="handleStatusClick">
                          <span class="el-dropdown-link changeOnLeads">
                            <i class="icon-primitive-dot" v-if="item.statusColor" v-bind:style="{ color: item.statusColor,marginLeft: '5px' }"></i>{{item.nameStatus || 'Chưa có trạng thái'}}
                          </span>
                          <el-dropdown-menu slot="dropdown" class="el-popper-default">
                            <el-dropdown-item key="itemNull" value="null" :command="{statusId: null, lead: item}">
                              {{'Chưa có trạng thái'}}
                            </el-dropdown-item>
                            <el-dropdown-item v-for="(statusItem, statusKey) in listStatus" :key="statusKey" :value="statusItem.name" :command="{statusId: statusItem.code, lead: item}">
                              <i class="icon-primitive-dot" v-bind:style="{ color: statusItem.color }"></i> {{statusItem.name}}
                            </el-dropdown-item>
                          </el-dropdown-menu>
                        </el-dropdown>
                      </div>
                      <div class="break-word pb-5 mt-3" @click="showChangeInfo(item)">
                        <span class="pointer" v-if="item.note && item.note.length > 23" style="float: left; padding-bottom: 20px; padding-right:5px"> <i class="icon-copy"></i></span>
                        <span class="pointer" v-else style="float: left; padding-right:5px"> <i class="icon-copy icon-style-custom"></i></span>
                        <span slot="reference" class="pointer changeOnLeads">
                          {{item.noteContent || 'Chưa có ghi chú'}}
                        </span>
                      </div>
                    </td>
                    <td v-show="headers['staffInCharge']">
                      <div class="icons-list display-inline" :title="'Phân bổ'">
                        <a @click="showChangeInfo(item,'assignment')"><i class="icon-shuffle" style="color:#2196f3;margin-top:-7px"></i></a>
                      </div>
                      <span class="display-inline">{{item.staffInCharge}}</span>
                    </td>
                    <td style="max-width:100px" v-show="headers['posting']">
                      <a class="blue--text" @click="goto(item,'posting')">Xem tin</a>
                    </td>
                    <td v-if="headers['system']">
                      <div>{{$t('createdBy')}} {{(item.createdBy) ? item.createdBy +  ' - ' + item.fromNowCreate  : $t('notAvailable')}}</div>
                      <div v-if="item.updatedBy">{{$t('updatedBy')}} {{item.updatedBy  + ' - ' + item.fromNowUpdate}}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <el-pagination :pager-count="5" class="ml-20 pagination-mobi" @size-change="handleSizeChange" @current-change="handleCurrentChange" background :current-page.sync="searchRequest.currentPage" :page-sizes="[10, 20, 50]" :page-size="searchRequest.pageSize" layout="sizes, prev, pager, next , jumper" :total="leadData.total">
            </el-pagination>
          </div>
        </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
    middleware: ['authenticated'],
    data(){
        return {
        }
    },
    computed:{
        ...mapGetters({
            usersData: 'users/getUsers'
        }),
    },
}
</script>

<style>
</style>
