<template>
    <div class="container add-form my-3">
        <form @submit.prevent="addForm">
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="name" name="name" v-model="name">

                </div>
            </div>
            <div class="form-group row">
                <label for="image" class="col-sm-2 col-form-label">Image Url</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="image" name="image" v-model="image">
                </div>
            </div>
             <div class="form-group row">
                <label for="stock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="stock" name="stock" v-model="stock">
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="price" name="price" v-model="price">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Add Product</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AddProduct',
  data () {
    return {
      name: '',
      image: '',
      stock: '',
      price: ''
    }
  },
  methods: {
    addForm () {
      axios({
        url: 'http://localhost:3000/products',
        method: 'post',
        data: {
          name: this.name,
          image_url: this.image,
          stock: this.stock,
          price: this.price
        },
        headers: {
          token: localStorage.token
        }
      })
        .then(data => {
          this.$router.push({ name: 'Home' })
        })
        .else(err => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style>
    .add-form{
        width: 90vw;
        height: 90vh;
    }
    form{
        margin-left: 300px;
    }
</style>
