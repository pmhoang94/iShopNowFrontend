<template>
  <div>
    <div :class="hideMenu ? 'sidebar-xs sidebar-mobile-main' : ''">
      <!-- Main navbar -->
      <nav-bar />
      <!-- /main navbar -->
      <!-- Page container -->
      <div class="page-container" :style="`min-height:${windowHeight}px;`">

        <!-- Page content -->
        <div :class="`page-content ${hideMenu ? 'sidebar-main' : ''}`">
          <!-- Main sidebar -->
          <side-bar />
          <!-- /main sidebar -->
          <!-- Main content -->
          <nuxt />
          <!-- /main content -->
        </div>
        <!-- /page content -->
      </div>
      <!-- /page container -->
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import NavBar from '~/components/NavBar.vue'
import SideBar from '~/components/SideBar.vue'
export default {
  components: {
    NavBar,
    SideBar
  },
  computed: {
    ...mapGetters({
    }),
    ...mapState({
      hideMenu: state => state.hideMenu,
    })
  },
  data() {
    return {
       windowHeight: 800,
    }
  },
  beforeMount() {
  },
  async created() {
  },
  mounted(){
  },
  watch:{
  },
  methods: {
  }
}
</script>

