import { Helmet } from 'react-helmet-async'
import Login from './Login'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const LoginPage = () => {
  const t = useMessages('login')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Login />
    </>
  )
}

export default LoginPage
