import { Helmet } from 'react-helmet-async'
import Managetask from './Managetask'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import React from 'react'

const ManagetaskPage = () => {
  const t = useMessages('managetask')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Managetask />
    </>
  )
}

export default ManagetaskPage
