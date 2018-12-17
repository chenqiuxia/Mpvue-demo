import http from './http'

const api = {
  getList: () => http.get('/list')
}
export default api
