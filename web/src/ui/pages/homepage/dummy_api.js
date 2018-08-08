import * as axiosWrapper from '../../../utilities/axios/wrapper'

export const fetch = {
  formatUrl: (amount) => `/animals/favorites/${amount}`,
  request: (url) => axiosWrapper.get(url),
}
