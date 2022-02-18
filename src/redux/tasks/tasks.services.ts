import axios from 'app/api'
import { Task } from 'redux-saga'
import endpoints from '../endpoints'
// export const createTasks = (body: { message: string }) => axios.post('/', body)

export const getAllTask = async (): Promise<any> => {
  const response = await axios.get(endpoints.tasks.getAll, {})

  return response.data
}

export const createTask = async (body: Task): Promise<any> => {
  const response = await axios.post(endpoints.tasks.create, body, {})
  return response.data
}

export const editTask = async (
  id: string,
  body: { title: string; description: string },
): Promise<any> => {
  const response = await axios.put(endpoints.tasks.editById(id), body, {})
  return response.data
}

export const deleteTask = async (id: string): Promise<any> => {
  const response = await axios.delete(endpoints.tasks.deleteById(id), {})
  return response.data
}
