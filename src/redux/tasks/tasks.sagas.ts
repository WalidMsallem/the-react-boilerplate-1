import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './tasks.constants'
import * as api from './tasks.services'


export function* tasksSaga() {
  yield takeLatest(constants.createTasks.request, function* (action: Action) {
    try {
      type Response = {
        data: {
          tasks: {
            message: string
          }
        }
      }
      const response: Response = yield call(api.createTasks, action.payload)

      if (response) {
        yield put({
          type: constants.createTasks.success,
          payload: {},
        })
      } else {
        yield put({
          type: constants.createTasks.failure,
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
