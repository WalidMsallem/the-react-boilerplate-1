import { createRoutes } from './utils'
import routesList from './routes.json'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { history } from './redux/store'
import { useGlobal } from 'app/hooks'
import React, { useEffect } from 'react'

// ! FIXME: Redux first history is not building with RR6
export const RouterProvider = (props: Props) => {
  const { loadUserData } = useGlobal()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      loadUserData()
    }
  }, [])

  return <Router history={history}>{props.children}</Router>
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export default createRoutes(routesList)

const merge = (path: string, params: string[]) =>
  path
    .split('/')
    .map(chunk => (chunk.startsWith(':') ? params.shift() : chunk))
    .join('/')

// ! FIXME: Routes are not typed
export const routes = routesList.reduce(
  (acc, { componentPath, path }) => ({
    ...acc,
    [componentPath]: (...params: string[]) => merge(path, params),
  }),
  {} as { [key: string]: (...params: string[]) => string },
)
