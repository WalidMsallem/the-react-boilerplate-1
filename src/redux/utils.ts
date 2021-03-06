const createAsyncActionType = (actionName: string) => ({
  failure: `${actionName}_FAILURE`,
  request: `${actionName}_REQUEST`,
  success: `${actionName}_SUCCESS`,
  reset: `${actionName}_RESET`,
})

const createBasicActionType = (actionName: string) => actionName

export const createActionType = (prefix: string) => {
  return {
    async: (action: string) => createAsyncActionType(`${prefix}/${action}`),
    basic: (action: string) => createBasicActionType(`${prefix}/${action}`),
  }
}

export const actionsCreator = () => {
  const empty = (type: string) => () => ({ type })
  const withPayload =
    <T>(type: string) =>
    (payload: T) => ({ type, payload })

  const withPayloadAndCallback =
    <T>(type: string) =>
    (payload: T, callback: Function) => ({ type, payload, callback })

  return {
    empty,
    withPayload,
    withPayloadAndCallback,
  }
}
