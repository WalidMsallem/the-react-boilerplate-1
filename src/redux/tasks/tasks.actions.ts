import * as constants from './tasks.constants'
import { actionsCreator } from '../utils'
import { Task } from './tasks.type'
const creator = actionsCreator()

export const init = creator.empty(constants.init)

export const createTasks = creator.withPayload<Task>(constants.CREATE_TASK)

export const editTask = creator.withPayload<Task>(constants.EDIT_TASK)

export const deleteTask = creator.withPayload<string>(constants.DELETE_TASK)
