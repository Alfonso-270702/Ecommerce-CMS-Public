<template>
<div class="container" style="width: 1500px;">
  <h1 class="text-center mt-3">Shoes Collection</h1>
  <div class="table d-flex justify-content-center my-5">
        <table class="table-striped shadow" style="width: 100%;">
            <thead>
                <tr>
                    <th style="min-width: 150px;" scope="col">No</th>
                    <th style="min-width: 150px;" scope="col">Name</th>
                    <th style="min-width: 150px;" scope="col">Image</th>
                    <th style="min-width: 150px;" scope="col">Price</th>
                    <th style="min-width: 150px;" scope="col">Stock</th>
                    <th class="text-center" style="min-width: 150px;" scope="col">Option</th>
                </tr>
            </thead>
            <tbody>
              <Product-table v-for="(product, index) in products" :key="product.id" :product="product" :index="index"/>
            </tbody>
        </table>
  </div>
</div>
</template>

<script>
import ProductTable from '../components/ProductTable.vue'
export default {
  name: 'Home',
  components: {
    ProductTable
  },
  methods: {
    fecthData () {
      this.$store.dispatch('listProduct')
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.fecthData()
  }
}
</script>

<style>
</style>
