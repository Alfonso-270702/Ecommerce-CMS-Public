<template>
  <div class="container">
      <h1>Login Here</h1>
      <form @submit.prevent="login">
            <div class="form-group row">
                <label for="email" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-7">
                    <input type="email" class="form-control" id="email" name="email" v-model="email">
                </div>
            </div>
            <div class="form-group row">
                <label for="password" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-7">
                    <input type="password" class="form-control " id="password" name="password" v-model="password">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
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
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          this.email = ''
          this.password = ''
          this.$router.push({ name: 'Home' })
        })
        .catch(err => console.log(err.response.data))
    }
  }
}
</script>

<style>

</style>
