<template>
  <!-- Main navbar -->
  <div class="navbar navbar-inverse">
    <div class="navbar-header" style="min-width:350px;">
      <ul class="nav navbar-nav visible-xs-block">
        <li style="float: left;margin-left: -49px;position: absolute;left: 66px;"><nuxt-link to="/" class="navbar-brand nuxt-link-active" style="padding-left:0px;"><img src="~/assets/images/logo.png" class="mr-1" style="display:inline-block;"><span style="display:inline-block;">ANYCAR</span></nuxt-link></li>
        <li>
          <div data-toggle="collapse" data-target="#navbar-mobile" style="padding: 5px;">

            <el-dropdown @command="actionNavbar" trigger="click">
            <span class="el-dropdown-link" style="color:#fff">
              <img :src="user ? user.picture: ''" alt="" style="width:38px;border-radius:50%">
              <span>{{user ? user.email : ''}}</span><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" style="margin-top: 4px;">
              <el-dropdown-item command="profile">
                <nuxt-link to="/profile" style="color: #606266;">My profile</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item command="language">
                <span @click="changeLang">{{lang != 'vi' ? 'Tiếng việt' : 'English'}}</span>
              </el-dropdown-item>
              <el-dropdown-item command="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          </div>
        </li>
        <li @click="toggleSidebar">
          <a class="sidebar-mobile-main-toggle">
            <i class="icon-paragraph-justify3"></i>
          </a>
        </li>
      </ul>
    </div>
    <div class="navbar-collapse collapse" >
      <ul class="nav navbar-nav">
        <li>
          <nuxt-link class="navbar-brand" style="padding-left:0px" to="/"><img src="~/assets/images/logo.png" style="display: inline-block;" class="mr-1"><span style="display: inline-block;" >ANYCAR</span></nuxt-link>
          <div @click="toggleSidebar" style="display: inline-block;margin-top: 13px;margin-left: 120px;">
            <a class="sidebar-control sidebar-main-toggle hidden-xs" style="color:white;">
            <i class="icon-paragraph-justify3"></i>
          </a>
          </div>
        </li>
      </ul>
      <div>
        <div style="list-style:none;float:right">
          <el-dropdown @command="actionNavbar" trigger="click" style="margin-top: 4px;">
            <span class="el-dropdown-link" style="color:#fff">
              <img :src="user ? user.picture: ''" alt="" style="width:38px;border-radius:50%">
              <span>{{user ? user.email : ''}}</span><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item command="profile">
                <nuxt-link to="/profile" style="color: #606266;">My profile</nuxt-link>
              </el-dropdown-item>
              <el-dropdown-item command="language">
                <span @click="changeLang">{{lang != 'vi' ? 'Tiếng việt' : 'English'}}</span>
              </el-dropdown-item>
              <el-dropdown-item command="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
  <!-- /main navbar -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState({
      user: state => state.auth.user,
      lang: state => state.locale
    })
  },
  created() {
  },
  mounted() {
  },
  methods: {
    toggleSidebar: function() {
      var _this = this
      _this.$store.dispatch('hideMenu')
    },
    logout: async function() {
      var _this = this
      await _this.$store.dispatch('auth/logout')
    },
    actionNavbar(val) {
      switch (val) {
        case 'logout':
          this.logout()
          break
      }
    },
    changeLang: function() {
      var _this = this
      var lang = _this.lang == 'vi' ? 'en' : 'vi'
      _this.$store.dispatch('setLang', lang)
    },
  }
}
</script>
