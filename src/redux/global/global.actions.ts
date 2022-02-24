import * as constants from './global.constants'
import { actionsCreator } from '../utils'
import { loginPayload } from './global.type'

const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createUser = creator.withPayload<{
  name: string
  age: number
}>(constants.createUser.request)

export const updateUser = creator.withPayload<{
  id: number
}>(constants.createUser.request)

export const loginUser = creator.withPayload<loginPayload>(
  constants.LOGIN_USER.request,
)

export const loadUserData = creator.empty(constants.GET_USER_DATA.request)
