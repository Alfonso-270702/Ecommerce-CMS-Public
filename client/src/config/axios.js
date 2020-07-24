import axios from 'axios'
import Swal from 'sweetalert2'
const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

instance.interceptors.response.use((response) => response, (error) => {
  // whatever you want to do with the error
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${error.response.data.errors.join(', ')}`
  })
  // console.log(error.response)
})
export default instance