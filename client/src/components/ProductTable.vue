<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{product.name}}</td>
    <td><img style="width: 100px;" :src="product.image_url" alt="image"></td>
    <td>{{product.price}}</td>
    <td>{{product.stock}}</td>
    <td class="text-center">
      <button @click="toEditPage" class="btn btn-outline-info mr-2"><i class="far fa-edit"></i></button>
      <button @click="deleteProduct" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
    </td>
 </tr>
</template>

<script>
export default {
  name: 'ProductBody',
  props: ['product', 'index'],
  methods: {
    toEditPage () {
      this.$router.push({ name: 'EditProduct', params: { id: `${this.product.id}` } })
    },
    deleteProduct () {
      this.$store.dispatch('deleteProduct', { id: `${this.product.id}` })
        .then(_ => {
          this.$store.dispatch('listProduct')
        })
    }
  }
}
</script>

<style>

</style>
