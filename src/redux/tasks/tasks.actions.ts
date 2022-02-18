import * as constants from './tasks.constants'
import { actionsCreator } from '../utils'
import { Task } from './tasks.type'
const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createTasks = creator.withPayloadAndCallback<Task>(
  constants.CREATE_TASK.request,
)

export const editTask = creator.withPayloadAndCallback<Task>(
  constants.EDIT_TASK.request,
)

export const deleteTask = creator.withPayload<string>(
  constants.DELETE_TASK.request,
)

export const getAllTasks = creator.empty(constants.GET_ALL_TASK.request)
