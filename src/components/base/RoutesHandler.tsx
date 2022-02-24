import { Route, Routes, Navigate } from 'react-router-dom'
import { Route as RouteType } from 'app/types/base'
import NotFound from './NotFound'
import Forbidden from './Forbidden'
import React from 'react'
import { useGlobal } from 'app/hooks'
const Protected = (props: { element: JSX.Element; roles?: string[] }) => {
  const { state } = useGlobal()
  const { element, roles } = props

  // TODO: Implement authorization
  // const role = state.user.data.role

  console.log('wal user', state.user.data)
  // console.log('wal role', role)
  if (!roles || roles.length === 0)
    // * if the page is accessible
    return element

  // * if he is not authentified
  if (!state.user.data || !state.user.data.role)
    return <Navigate to="/login" replace />

  // * if he is authentified and doesnt have the required role
  if (state.user.data && roles.indexOf(state.user.data.role) === -1)
    return <Forbidden />

  return element
}

export const RoutesSetup = (props: { routes: RouteType[] }) => {
  return (
    <Routes>
      {props.routes.map(({ path, Component, Layout, roles }) => (
        <Route
          key={path}
          path={path}
          element={
            <Protected
              element={
                <Layout>
                  <Component />
                </Layout>
              }
              roles={roles}
            />
          }
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default RoutesSetup
