import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './global.constants'
import initialState from './global.state'
// import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.LOGIN_USER.request:
        draft.login.loading = true
        draft.login.error = ''
        break
      case constants.LOGIN_USER.success:
        draft.login.loading = false
        draft.login.error = ''
        localStorage.setItem('token', action.payload.tokens.access.token)
        break
      case constants.LOGIN_USER.failure:
        draft.login.loading = true
        draft.login.error = action.payload.error.message
        draft.isAuthentificated = false
        break

      case constants.GET_USER_DATA.request:
        draft.user.loading = true
        draft.user.error = ''
        break
      case constants.GET_USER_DATA.success:
        draft.user.loading = false
        draft.user.error = ''
        draft.user.data = action.payload
        draft.isAuthentificated = true
        break
      case constants.GET_USER_DATA.failure:
        draft.user.loading = false
        draft.user.error = action.payload.error.message
        draft.isAuthentificated = false
        break

      default:
        break
    }
  })
