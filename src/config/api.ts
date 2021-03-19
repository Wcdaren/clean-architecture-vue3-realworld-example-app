const isProduction = process.env.NODE_ENV === 'production'

const devApiConfig = {
  baseUrl: 'https://conduit.productionready.io/api',
  // baseUrl: 'https://yapi.oa.fenqile.com/mock/188/api'
}

const prodApiConfig = {
  baseUrl: 'https://dddforum.herokuapp.com/api/v1',
}

const apiConfig = isProduction ? prodApiConfig : devApiConfig

export { apiConfig }
