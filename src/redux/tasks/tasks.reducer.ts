import produce from 'immer'
import { Action } from 'app/types/redux'
import * as constants from './tasks.constants'
import initialState from './tasks.state'
import toast from 'react-hot-toast'

export const reducer = (state = initialState, action: Action) =>
  produce(state, draft => {
    switch (action.type) {
      // create
      case constants.CREATE_TASK.request:
        // draft.list = state.list.concat(action.payload)
        draft.createTask.loading = true
        draft.createTask.error = ''
        break
      case constants.CREATE_TASK.success:
        draft.createTask.loading = false
        draft.createTask.error = ''
        draft.list.data.results = state.list.data.results.concat(action.payload)
        break
      case constants.CREATE_TASK.failure:
        draft.createTask.loading = true
        draft.createTask.error = action.payload.error
        // draft.list = state.list.concat(action.payload)
        break
      // edit
      case constants.EDIT_TASK.request:
        draft.editTask.loading = true
        draft.editTask.error = ''
        break
      case constants.EDIT_TASK.success:
        draft.editTask.loading = false
        draft.editTask.error = ''
        draft.list.data.results = state.list.data.results.map(element => {
          console.log('element', element)
          if (element.id === action.payload.id) {
            return { ...element, ...action.payload }
          }
          return action.payload
        })
        break
      case constants.EDIT_TASK.failure:
        draft.editTask.loading = true
        draft.editTask.error = action.payload.error
        break

      // delete
      case constants.DELETE_TASK.request:
        draft.deleteTask.loading = true
        draft.deleteTask.error = ''
        break
      case constants.DELETE_TASK.success:
        draft.deleteTask.loading = false
        draft.deleteTask.error = ''
        draft.list.data.results = state.list.data.results.filter(
          element => element.id !== action.payload.id,
        )
        break
      case constants.DELETE_TASK.failure:
        draft.deleteTask.loading = true
        draft.deleteTask.error = action.payload.error
        break

      // case constants.DELETE_TASK:
      // draft.list = state.list.filter(element => element.id !== action.payload)
      //   break
      // get all

      case constants.GET_ALL_TASK.request:
        draft.list.loading = true
        draft.list.error = ''
        break
      case constants.GET_ALL_TASK.success:
        draft.list.loading = false
        draft.list.error = ''
        draft.list.data = action.payload
        break
      case constants.GET_ALL_TASK.failure:
        draft.list.loading = false
        // draft.list.error = action.error
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
