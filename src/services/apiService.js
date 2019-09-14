import axios from 'axios'

const apiService = () => {
  const client = axios.create({
    baseURL: 'https://front-test.beta.aviasales.ru'
  })

  return {
    get: (url, params) => {
      return client.get(url, params)
    },
  }
}

export default apiService()
