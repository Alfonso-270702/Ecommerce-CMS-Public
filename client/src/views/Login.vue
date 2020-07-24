<template>
  <div class="login-form">
    <div class="login-container">
      <div class="d-flex justify-content-center">
        <h1 class="login-h1">Login Here</h1>
      </div>
      <div class="d-flex">
        <form @submit.prevent="login" class="ml-0">
              <div class="form-group">
                  <div class="d-flex justify-content-center">
                    <label for="email" style="color: white;">Email</label>
                  </div>
                  <div class="d-flex justify-content-center">
                      <input type="email" class="form-control" style="width: 500px" id="email" name="email" v-model="email">
                  </div>
              </div>
              <div class=" form-group">
                <div class="d-flex justify-content-center">
                  <label for="password" style="color: white;">Password</label>
                </div>
                  <div class="d-flex justify-content-center ">
                      <input type="password" class="form-control" style="width: 500px" id="password" name="password" v-model="password">
                  </div>
              </div>
              <div class="form-group">
                  <div class="d-flex justify-content-center">
                      <button type="submit" class="btn btn-primary">Sign in</button>
                  </div>
              </div>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      })
        .then(_ => {
          this.$router.push({ name: 'Home' })
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>

<style>
  .login-form{
    background: url(../assets/background.jpg);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-container {
    background-color: rgba(8, 8, 8, 0.8);
    padding: 40px;
    border-radius: 10px;
  }
  .login-h1{
    color: white;
  }
</style>
