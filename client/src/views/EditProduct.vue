<template>
    <div class="container">
        <form>
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name {{this.id}}</label>
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
            <button type="submit" class="btn btn-primary">Edit Product</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'EditForm',
  props: ['product'],
  data () {
    return {
      name: `${this.product.name}`,
      image: `${this.product.image_url}`,
      stock: `${this.product.stock}`,
      price: `${this.product.price}`,
      id: `${this.route.params.id}`
    }
  },
  methods: {
    editForm () {
      axios({
        method: 'put',
        url: `http://localhost:3000/products/${this.id}`,
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
          console.log(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
