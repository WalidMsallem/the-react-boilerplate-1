import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './tasks.constants'
import initialState from './tasks.state'
// import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.CREATE_TASK:
        draft.list = state.list.concat(action.payload)
        break

      case constants.EDIT_TASK:
        draft.list = state.list.map(element => {
          if (element.id === action.payload.id) {
            return { ...element, ...action.payload }
          }
          return element
        })
        break

      case constants.DELETE_TASK:
        draft.list = state.list.filter(element => element.id !== action.payload)
        break

      // case constants.init:
      //   toast('init')
      //   break

      // case constants.createTasks.request:
      //   toast('request')
      //   break

      // case constants.createTasks.failure:
      //   toast('failed')
      //   break

      // case constants.createTasks.success:
      //   toast('successed')
      //   break

      default:
        break
    }
  })
