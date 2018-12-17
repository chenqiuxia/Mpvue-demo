import http from '@/utils/http'

export const getList = () => {
  return http.get('/list')
    .then(res => res.data.jobs)
}
