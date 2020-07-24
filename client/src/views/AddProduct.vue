<template>
  <div class="add-form">
    <div class="add-container">
      <form @submit.prevent="addForm">
        <div class="d-flex justify-content-center">
          <h1 class="mt-2">Add Product</h1>
        </div>
          <div class="form-group">
            <div class="d-flex justify-content-center">
              <label for="name" style="margin-top: 10px">Name:</label>
            </div>
            <div class="d-flex justify-content-center">
                <input type="text" class="form-control" style="width: 500px" id="name" name="name" v-model="name">
            </div>
          </div>
          <div class="form-group ">
            <div class="d-flex justify-content-center">
              <label for="image" >Image Url:</label>
            </div>
            <div class="d-flex justify-content-center">
                <input type="text" class="form-control" style="width: 500px" id="image" name="image" v-model="image">
            </div>
          </div>
          <div class="form-group ">
            <div class="d-flex justify-content-center">
            <label for="stock">Stock:</label>
            </div>
            <div class="d-flex justify-content-center">
                <input type="text" class="form-control" style="width: 500px" id="stock" name="stock" v-model="stock">
            </div>
          </div>
          <div class="form-group ">
            <div class="d-flex justify-content-center">
              <label for="price" >Price:</label>
            </div>
            <div class="d-flex justify-content-center">
                <input type="text" class="form-control" style="width: 500px" id="price" name="price" v-model="price">
            </div>
          </div>
          <div class="form-group">
            <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary mr-3">Add Product</button>
                <button  @click="homePage" type="submit" class="btn btn-primary mr-3">Cancel</button>
            </div>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
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
      this.$store.dispatch('addProduct', {
        name: this.name,
        image_url: this.image,
        stock: this.stock,
        price: this.price
      })
        .then(_ => {
          this.$router.push({ name: 'Home' })
        })
    },
    homePage () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>
 .add-form {
   height: 93.6vh;
   background: url(../assets/wood2.jpg);
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   align-items: center;
 }
 .add-container {
    background-color: rgba(185, 174, 174, 0.8);
    padding: 40px;
    border-radius: 10px;
 }
</style>
