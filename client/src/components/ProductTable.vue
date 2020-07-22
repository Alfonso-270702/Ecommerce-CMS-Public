<template>
  <tr>
    <td>{{index+1}}</td>
    <td>{{product.name}}</td>
    <td><img style="width: 100px;" :src="product.image_url" alt="image"></td>
    <td>{{product.price}}</td>
    <td>{{product.stock}}</td>
    <td><router-link :to="({ name:'EditProduct', params: { id: `${product.id}` } })" :product="product">Edit</router-link> | <router-link :to="({ name: 'EditProduct' })">Delete</router-link></td>
 </tr>
</template>

<script>
export default {
  name: 'ProductBody',
  props: ['product', 'index']
}
</script>

<style>

</style>
