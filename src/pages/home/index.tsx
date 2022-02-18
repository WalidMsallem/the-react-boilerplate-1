import { Helmet } from 'react-helmet-async'
import Home from './Home'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import React from 'react'
import { routes } from 'app/routes'
const HomePage = props => {
  const t = useMessages('home')
  console.log('routes', routes.test('kk', 'nnnn'))
  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Home {...props} />
    </>
  )
}

export default HomePage
