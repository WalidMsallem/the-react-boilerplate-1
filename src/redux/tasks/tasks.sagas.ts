import { call, put, takeLatest, delay } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './tasks.constants'
import * as api from './tasks.services'

type Response = {
  data: {
    tasks: {
      message: string
    }
  }
}

export function* tasksListSaga() {
  yield takeLatest(constants.GET_ALL_TASK.request, function* (action: Action) {
    try {
      const response: Response = yield call(api.getAllTask)
      // yield delay(1000)
      if (response) {
        yield put({
          type: constants.GET_ALL_TASK.success,
          payload: response,
        })
      } else {
        yield put({
          type: constants.GET_ALL_TASK.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createTasks.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}

export function* createTaskSaga() {
  yield takeLatest(constants.CREATE_TASK.request, function* (action: Action) {
    try {
      const response: Response = yield call(api.createTask, action.payload)
      // yield delay(1000)
      if (response) {
        action.callback && action.callback()

        yield put({
          type: constants.CREATE_TASK.success,
          payload: response,
        })
      } else {
        yield put({
          type: constants.CREATE_TASK.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createTasks.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}

export function* editTaskSaga() {
  yield takeLatest(constants.EDIT_TASK.request, function* (action: Action) {
    try {
      const task = {
        title: action.payload.title,
        description: action.payload.description,
      }
      const response: Response = yield call(
        api.editTask,
        action.payload.id,
        task,
      )
      // yield delay(1000)
      if (response) {
        action.callback && action.callback()

        yield put({
          type: constants.EDIT_TASK.success,
          payload: response,
        })
      } else {
        yield put({
          type: constants.EDIT_TASK.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createTasks.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}

export function* deleteTaskSaga() {
  yield takeLatest(constants.DELETE_TASK.request, function* (action: Action) {
    try {
      const response: Response = yield call(api.deleteTask, action.payload)
      yield delay(1000)
      if (response) {
        yield put({
          type: constants.DELETE_TASK.success,
          payload: response,
        })
      } else {
        yield put({
          type: constants.DELETE_TASK.failure,
          payload: {
            error: 'error',
          },
        })
      }
    } catch (e: any) {
      yield put({
        type: constants.createTasks.failure,
        payload: { error: e.response.data ? e.response.data.error : e.message },
      })
    }
  })
}
