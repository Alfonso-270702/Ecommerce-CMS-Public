import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    isLogin: false
  },
  mutations: {
    addToProductList (state, payload) {
      state.products = payload
    },
    userLoginStatus (state) {
      state.isLogin = true
    },
    userLogoutStatus (state) {
      state.isLogin = false
    }
  },
  actions: {
    userLogin (context, payload) {
      return axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
        .then(({ data }) => {
          localStorage.setItem('token', data.token)
          context.commit('userLoginStatus')
        })
    },
    userLogout (context) {
      localStorage.clear()
      context.commit('userLogoutStatus')
    },
    listProduct (context) {
      axios({
        url: 'http://localhost:3000/products',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          context.commit('addToProductList', data)
        })
    },
    addProduct (context, payload) {
      return axios({
        url: 'http://localhost:3000/products',
        method: 'post',
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(_ => {
        })
    },
    editProduct (context, payload) {
      return axios({
        method: 'put',
        url: `http://localhost:3000/products/${payload.id}`,
        data: {
          name: payload.name,
          image_url: payload.image_url,
          stock: payload.stock,
          price: payload.price
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(_ => {
        })
    },
    deleteProduct (context, payload) {
      return axios({
        method: 'delete',
        url: `http://localhost:3000/products/${payload.id}`,
        headers: {
          token: localStorage.token
        }
      })
        .then(_ => {
        })
    }
  },
  getters: {
    getEditedData: (state) => (id) => {
      const editedProduct = state.products.filter(item => {
        return item.id === Number(id)
      })
      return editedProduct[0]
    }
  }
})
