import { NuxtAxiosInstance } from '@nuxtjs/axios'

let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
  $axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
}
   
export { $axios }
