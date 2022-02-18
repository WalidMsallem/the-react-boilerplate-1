export type AsyncState<T> = {
  data?: T | any
  loading: boolean
  error: string | null
}

export type Action = {
  type: string | AsyncActionType
  payload: any
  callback?: Function
  data?: Object | []
}

export type AsyncActionType = {
  failure: string
  success: string
  request: string
  reset: string
}
