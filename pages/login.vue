<template>
  <div class="container h-100">
  <div class="row h-100 justify-content-center align-items-center">
    <form class="col-12">
      <div class="form-group">
        <label for="formGroupExampleInput">Example label</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Another label</label>
        <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      </div>
    </form>
  </div>
</div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {},
  methods: {
    loginGoogle: async function() {
      var _this = this
      await _this.$store.dispatch('auth/signInWithGoogle')
    }
  },
  async mounted() {
    var _this = this
    // await _this.$store.dispatch('auth/getRedirectGoogle')
  }
}
</script>

<style scoped>
</style>
