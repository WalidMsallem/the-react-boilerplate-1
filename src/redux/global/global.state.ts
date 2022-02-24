import { AsyncState } from 'app/types/redux'

const initialState: State = {
  isAuthentificated: null,
  login: {
    loading: false,
    error: null,
    data: null,
  },
  user: {
    loading: true,
    error: null,
    data: null,
  },
}
export default initialState

type User = {
  firstName: string
}

export type State = {
  isAuthentificated: boolean | null
  login: AsyncState<null>
  user: AsyncState<User>
}
