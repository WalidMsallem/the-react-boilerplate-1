import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './global.constants'
import initialState from './global.state'
import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.createUser.request:
        toast('init.request')
        draft.login.loading = true
        break

      case constants.createUser.failure:
        toast('init.failed')
        break

      case constants.createUser.success:
        toast('init.successed')
        draft.login.loading = false
        break

      default:
        break
    }
  })
