import axios from 'app/api'

export const createTasks = (body: { message: string }) => axios.post('/', body)
