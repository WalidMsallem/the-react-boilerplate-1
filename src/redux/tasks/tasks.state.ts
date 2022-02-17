// import { AsyncState } from 'app/types/redux'

import { Task } from './tasks.type'

const initialState: State = {
  // createTasks: {
  //   loading: false,
  //   error: null,
  //   data: null,
  // },
  list: [
    {
      id: '1',
      title: 'title 1',
      description: 'description 1',
    },
    {
      id: '2',
      title: 'title 2',
      description: 'description 2',
    },
  ],
}
export default initialState

export type State = {
  // createTasks: AsyncState<null | Tasks>
  list: Task[]
}

// type Tasks = {
//   message: string
// }
