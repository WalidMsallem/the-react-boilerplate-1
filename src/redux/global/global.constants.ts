import { createActionType } from '../utils'

const prefix = 'GLOBAL'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createUser = create.async('CREATE_USER')

export const LOGIN_USER = create.async('LOGIN_USER')

export const GET_USER_DATA = create.async('GET_USER_DATA')
