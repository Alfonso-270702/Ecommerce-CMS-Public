<template>
  <div class="edit" v-if="editedProduct">
    <div class="edit-container">
      <form @submit.prevent="editForm">
        <div class="d-flex justify-content-center">
          <h1 class="mt-2">Edit Product</h1>
        </div>
          <div class="form-group">
              <div class="d-flex justify-content-center">
                <label for="name" style="margin-top: 10px">Name:</label>
              </div>
              <div class="d-flex justify-content-center">
                  <input type="text" class="form-control" style="width: 500px" id="name" name="name" v-model="editedProduct.name">
              </div>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-center">
                <label for="image" >Image Url:</label>
              </div>
              <div class="d-flex justify-content-center">
                  <input type="text" class="form-control" style="width: 500px" id="image" name="image" v-model="editedProduct.image_url">
              </div>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-center">
              <label for="stock">Stock:</label>
              </div>
              <div class="d-flex justify-content-center">
                  <input type="text" class="form-control" style="width: 500px" id="stock" name="stock" v-model="editedProduct.stock">
              </div>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-center">
                <label for="price">Price:</label>
              </div>
              <div class="d-flex justify-content-center">
                  <input type="text" class="form-control" style="width: 500px" id="price" name="price" v-model="editedProduct.price">
              </div>
            </div>
            <div class="form-group">
              <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary mr-3">Edit Product</button>
                  <button  @click="homePage" type="submit" class="btn btn-primary mr-3">Cancel</button>
              </div>
            </div>
      </form>
    </div>
    </div>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    editForm () {
      this.$store.dispatch('editProduct', {
        name: this.editedProduct.name,
        image_url: this.editedProduct.image_url,
        stock: this.editedProduct.stock,
        price: this.editedProduct.price,
        id: this.$route.params.id
      })
        .then(_ => {
          this.$router.push({ name: 'Home' })
        })
    },
    homePage () {
      this.$router.push({ name: 'Home' })
    }
  },
  created () {
    if (this.$store.state.products.length === 0) {
      this.$store.dispatch('listProduct')
    }
  },
  computed: {
    editedProduct () {
      return this.$store.getters.getEditedData(this.$route.params.id)
    }
  }
}
</script>

<style>
  .edit{
    height: 93.6vh;
    background-color: #eff1f3;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../assets/wood2.jpg);
  }
  .edit-container{
     background-color: rgba(185, 174, 174, 0.8);
     padding: 40px;
     border-radius: 10px;
  }
</style>
