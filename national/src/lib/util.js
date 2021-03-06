import Cookies from 'js-cookie'
export const setTitle = (meta) => {
  document.title = meta && meta.title ? meta.title : 'vue'
}

export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}

export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}

export const t = 0;
export const d = '1628524800000'