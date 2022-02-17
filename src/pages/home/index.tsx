import { Helmet } from 'react-helmet-async'
import Home from './Home'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import React from 'react'

const HomePage = props => {
  const t = useMessages('home')

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
