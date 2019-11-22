<template>
  <div>
    <button @click="googleSignUp">Google Sign In</button>
  </div>
</template>

<script>
export default {
methods: {
    googleSignUp () {
      this.$store.dispatch('signInWithGoogle').then(() => {
        console.log('inside then statement on login');
      }).catch((e) => {
        console.log(e.message);
      })
    }
  }
}
</script>

<style>

</style>
