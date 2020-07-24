<template>
  <div id="app">
    <div id="nav" class="navbar" v-if="this.$store.state.isLogin === true">
      <div class="d-flex justify-content-between w-100">
        <div class="d-flex align-items-center">
          <i class="fas fa-shopping-cart m-2 fa-2x" style="width: 45px"></i>
          <router-link :to="{name: 'Home'}" class="m-2">Home</router-link>
          <!-- <router-link  v-if="this.$store.state.isLogin === false" :to="{name: 'Login'}" class="m-2">Login</router-link> -->
          <router-link :to="{name: 'AddProduct'}" class="m-2">Add Product</router-link>
        </div>
        <div class="d-flex align-items-center">
          <button @click="toLogout" class="btn btn-secondary" >Logout</button>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    toLogout () {
      this.$store.dispatch('userLogout')
      this.$router.push({ name: 'Login' })
    }
  },
  created () {
    if (localStorage.token) {
      this.$store.commit('userLoginStatus')
    } else {
      this.$store.commit('userLogoutStatus')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 10px;
  background: rgb(154,168,251);
  background: linear-gradient(90deg, rgba(154,168,251,1) 0%, rgba(142,170,250,1) 35%, rgba(127,174,250,1) 100%);
}

.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
