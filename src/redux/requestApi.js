import Axios from 'axios'

export const requestApi = (path, method = 'GET', body = null, query = null) => {
  const url = `http://localhost:9000/api${path}`

  const options = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    withCredentials: true
  }

  if (body !== null) {
    options.data = body
  }

  // if (requiresAuth) {
  //   const token = Cookies.getJSON('token')

  //   options.headers.Authorization = `Bearer ${token}`
  // }

  if (query !== null) {
    options.params = query
  }
  console.log(options)
  return Axios(url, options)
}
