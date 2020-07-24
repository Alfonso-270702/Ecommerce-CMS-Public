<template>
    <div class="container  my-3" v-if="editedProduct">
        <form @submit.prevent="editForm">
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="name" name="name" v-model="editedProduct.name">
                </div>
            </div>
            <div class="form-group row">
                <label for="image" class="col-sm-2 col-form-label">Image Url</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="image" name="image" v-model="editedProduct.image_url">
                </div>
            </div>
             <div class="form-group row">
                <label for="stock" class="col-sm-2 col-form-label">Stock</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="stock" name="stock" v-model="editedProduct.stock">
                </div>
            </div>
            <div class="form-group row">
                <label for="price" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control w-50" id="price" name="price" v-model="editedProduct.price">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Edit Product</button>
        </form>
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

</style>
