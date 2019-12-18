<template>
  <div class="container">
    <h1>login</h1>
    <input type="button" value="Login with Google" @click="loginGoogle" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { auth } from '@/services/fireinit.js'

export default {
  methods: {
    loginGoogle() {
      this.$store
        .dispatch('signInWithGoogle')
        .then(() => {
          console.log('inside then statement on login')
        })
        .catch(e => {
          console.log(e.message)
        })
    }
  }
}
</script>

<style scoped>
</style>
