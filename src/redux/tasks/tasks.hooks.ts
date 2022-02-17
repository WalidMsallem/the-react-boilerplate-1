import { useEffect, useCallback, useMemo } from 'react'
import * as tasksActions from './tasks.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from './tasks.state'
import { dispatch } from 'react-hot-toast/dist/core/store'

export const useTasks = () => {
  const actions = useActions()

  const state = useSelector<{ tasks: State }>(({ tasks }) => tasks)

  const findTaskById = (id: string) =>
    useSelector<{ tasks: State }>(({ tasks }) =>
      tasks.list.find(element => element.id === id),
    )
  const test = (id: string) =>
    useCallback(
      id =>
        useSelector<{ tasks: State }>(({ tasks }) =>
          tasks.list.find(element => element.id === id),
        ),
      [],
    )
  const createTask = useCallback(actions.createTasks, [])

  const editTask = useCallback(actions.editTask, [])

  const deleteTask = useCallback(actions.deleteTask, [])

  return {
    editTask,
    createTask,
    findTaskById,
    state,
    deleteTask,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(tasksActions, dispatch)
  }, [tasksActions, dispatch])

  return actions
}
