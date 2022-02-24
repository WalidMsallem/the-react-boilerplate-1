import axios from 'app/api'
import endpoints from '../endpoints'
import { loginPayload } from './global.type'

export const helloWorld = () => axios.post('/')

export const loginUser = async (body: loginPayload) => {
  const response = await axios.post(endpoints.auth.login, body)
  return response.data
}

export const loadUserData = async (token: string) => {
  if (token) {
    const response = await axios.get(endpoints.user.me, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } else {
    const response = await axios.get(endpoints.user.me)
    return response.data
  }
}
