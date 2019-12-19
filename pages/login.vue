<template>
  <div class="container">
    <h1>login</h1>
    <input type="button" value="Login with Google" @click="loginGoogle()" />
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  computed: {},
  methods: {
    loginGoogle: async function() {
      let _this = this
      debugger
      await _this.$store.dispatch('auth/signInWithGoogle')
    }
  }
}
</script>

<style scoped>
</style>
