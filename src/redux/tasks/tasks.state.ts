import { AsyncState } from 'app/types/redux'

import { Task, PaginateData } from './tasks.type'

const initialState: State = {
  // createTasks: {
  //   loading: false,
  //   error: null,
  //   data: null,
  // },
  createTask: {
    loading: false,
    error: '',
  },
  editTask: {
    loading: false,
    error: '',
  },
  deleteTask: {
    loading: false,
    error: '',
  },
  list: {
    data: {
      results: [],
      page: 1,
      limit: 10,
      totalPages: 1,
      totalResults: 1,
    },
    error: null,
    loading: false,
  },
}
export default initialState

export type State = {
  // createTasks: AsyncState<null | Tasks>
  list: AsyncState<PaginateData<Task[]>[]>
  createTask: AsyncState<any>
  editTask: AsyncState<any>
  deleteTask: AsyncState<any>
}

// type Tasks = {
//   message: string
// }
