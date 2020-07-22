<template>
  <div class="table table-sm d-flex justify-content-center my-5">
        <table class="table-striped">
            <thead>
                <tr>
                    <th style="min-width: 150px;" scope="col">No</th>
                    <th style="min-width: 150px;" scope="col">Name</th>
                    <th style="min-width: 150px;" scope="col">Image</th>
                    <th style="min-width: 150px;" scope="col">Price</th>
                    <th style="min-width: 150px;" scope="col">Stock</th>
                    <th style="min-width: 150px;" scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
              <Product-table v-for="(product, index) in products" :key="product.id" :product="product" :index="index"/>
            </tbody>
        </table>
  </div>
</template>

<script>
import axios from 'axios'
import ProductTable from '../components/ProductTable.vue'
export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductTable
  },
  methods: {
    fecthData () {
      axios({
        url: 'http://localhost:3000/products',
        method: 'get',
        headers: {
          token: localStorage.token
        }
      })
        .then(({ data }) => {
          // console.log(data)
          this.products = data
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  created () {
    this.fecthData()
  }
}
</script>
