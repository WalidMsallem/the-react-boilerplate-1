import { call, put, takeLatest, all } from 'redux-saga/effects'
import type { Action } from 'app/types/redux'
import * as constants from './global.constants'
import * as api from './global.services'
import { push } from 'redux-first-history'
// ! FIXME: add routing in sagas

export function* loginUserSaga() {
  yield takeLatest(constants.LOGIN_USER.request, function* (action: Action) {
    try {
      type Response = any
      const response: Response = yield call(api.loginUser, action.payload)
      // const response: Response = 'hello world'
      // yield put(push('/walid'))
      // if (response) {
      yield put({
        type: constants.LOGIN_USER.success,
        payload: response,
      })
      yield put({
        type: constants.GET_USER_DATA.request,
        payload: response.tokens.access.token,
      })
      // } else {
      //   console.log('response1', response)
      //   yield put({
      //     type: constants.LOGIN_USER.failure,
      //     payload: {
      //       error: response,
      //     },
      //   })
      // }
    } catch (e: any) {
      yield put({
        type: constants.LOGIN_USER.failure,
        payload: { error: e.response.data ? e.response.data : e.message },
      })
    }
  })
}

export function* loadUserDataSaga() {
  yield takeLatest(constants.GET_USER_DATA.request, function* (action: Action) {
    try {
      type Response = any
      const response: Response = yield call(api.loadUserData, action.payload)
      // const response: Response = 'hello world'
      // yield put(push('/walid'))
      // if (response) {
      yield put({
        type: constants.GET_USER_DATA.success,
        payload: response,
      })
      // } else {
      //   console.log('response1', response)
      //   yield put({
      //     type: constants.GET_USER_DATA.failure,
      //     payload: {
      //       error: response,
      //     },
      //   })
      // }
    } catch (e: any) {
      yield put({
        type: constants.GET_USER_DATA.failure,
        payload: { error: e.response.data ? e.response.data : e.message },
      })
    }
  })
}
