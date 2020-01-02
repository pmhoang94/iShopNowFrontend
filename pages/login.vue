<template>
  <div class="container body-login">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <b-form class="user" @signIn="signIn" @signInWithGoogle="signInWithGoogle" @signInWithFacebook="signInWithFacebook">
                    <b-form-group>
                      <b-form-input v-model="email" type="form.email" required class="form-control form-control-user" aria-describedby="emailHelp" placeholder="Enter Email Address..."></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input v-model="password" type="form.password" required class="form-control form-control-user" placeholder="Password"></b-form-input>
                    </b-form-group>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input type="checkbox" class="custom-control-input" id="customCheck">
                        <label class="custom-control-label" for="customCheck">Remember Me</label>
                      </div>
                    </div>
                    <b-button type="signIn" variant="info" class="btn btn-primary btn-user btn-block">Login</b-button>
                    <b-button type="button" @click="signInWithGoogle" variant="info" class="fab fa-google fa-fw btn btn-google btn-user btn-block">Login with Google</b-button>
                    <b-button type="button" @click="signInWithFacebook" variant="info" class="btn btn-facebook btn-user btn-block fab fa-facebook-f fa-fw">Login with Google</b-button>
                  </b-form>
                  <hr>
                  <div class="text-center">
                    <a class="small" href="forgot-password.html">Forgot Password?</a>
                  </div>
                  <div class="text-center">
                    <a class="small" href="register.html">Create an Account!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import blank from '~/layouts/blank.vue'

export default {
  layout: 'blank',
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
    signInWithGoogle: async function() {
      var _this = this
      await _this.$store.dispatch('auth/signInWithGoogle')
    },
    signIn: async function(evt) {
      evt.preventDefault()
      var _this = this

    }
  },
  async mounted() {
    var _this = this
    // await _this.$store.dispatch('auth/getRedirectGoogle')
  }
}
</script>


