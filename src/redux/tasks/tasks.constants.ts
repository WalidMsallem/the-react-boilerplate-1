import { createActionType } from '../utils'

const prefix = 'TASKS'
const create = createActionType(prefix)

export const init = create.basic('INIT')
export const createTasks = create.async('CREATE_TASKS')

export const CREATE_TASK = create.basic('CREATE_TASK')

export const EDIT_TASK = create.basic('EDIT_TASK')

export const DELETE_TASK = create.basic('DELETE_TASK')
