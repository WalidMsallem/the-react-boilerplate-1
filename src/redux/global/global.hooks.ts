import { useEffect, useCallback, useMemo } from 'react'
import * as globalActions from './global.actions'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { State } from './global.state'

export const useGlobal = () => {
  const actions = useActions()
  const state = useSelector(({ global }: { global: State }) => global)

  const loginUser = useCallback(actions.loginUser, [])
  const loadUserData = useCallback(actions.loadUserData, [])

  return {
    loginUser,
    loadUserData,
    state,
  }
}

const useActions = () => {
  const dispatch = useDispatch()
  const actions = useMemo(() => {
    return bindActionCreators(globalActions, dispatch)
  }, [globalActions, dispatch])

  return actions
}
