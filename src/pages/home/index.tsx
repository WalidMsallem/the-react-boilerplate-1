import { Helmet } from 'react-helmet-async'
import Home from './Home'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import React from 'react'

const HomePage = () => {
  const t = useMessages('home')
  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Home />
    </>
  )
}

export default HomePage
