<template>
  <!-- Main sidebar -->
  <div class="sidebar sidebar-main">
    <div class="sidebar-content">
      <!-- Main navigation -->
      <div class="sidebar-category sidebar-category-visible">
        <div class="category-content no-padding">
          <ul class="navigation navigation-main navigation-accordion">

            <!-- Main -->
            <li class="navigation-header"><span>Main</span> <i class="icon-menu" title="Main pages"></i></li>
            <nuxt-link tag="li" to="/car" active-class="active"><a><i class="icon-car"></i> <span class="colorText">Xe ký gửi</span></a></nuxt-link>
            <nuxt-link tag="li" to="/dealer" active-class="active"><a><i class="icon-user-tie"></i> <span class="colorText">Quản lý đại lý</span></a></nuxt-link>
            <nuxt-link tag="li" to="/notify-errors" active-class="active"><a><i class="icon-bug2"></i> <span class="colorText">Thông báo lỗi</span></a></nuxt-link>
            <nuxt-link tag="li" to="/news" active-class="active"><a><i class=" icon-newspaper"></i> <span class="colorText">Tin tức gửi đến App Dealer</span></a></nuxt-link>
            <nuxt-link tag="li" to="/demand" active-class="active"><a><i class=" glyphicon glyphicon-list-alt"></i> <span class="colorText">Nhu cầu mua xe</span></a></nuxt-link>
            <nuxt-link tag="li" to="/calendar" active-class="active"><a><i class="icon-calendar3"></i> <span class="colorText">Lịch làm việc</span></a></nuxt-link>
            <nuxt-link tag="li" to="/showroom" active-class="active"><a><i class="icon-office"></i> <span class="colorText">Quản lý showroom</span></a></nuxt-link>
            <nuxt-link tag="li" to="/users" active-class="active"><a><i class="icon-user"></i> <span class="colorText">Quản lý người dùng</span></a></nuxt-link>
          </ul>
        </div>
      </div>
      <!-- /main navigation -->
    </div>
  </div>
  <!-- /main sidebar -->
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState({
      hideMenu: state => state.hideMenu
    })
  },
  created() {},
  methods: {
    toggleSidebar: function() {
      var _this = this
      _this.$store.dispatch('hideMenu')
    }
  }
}
</script>
