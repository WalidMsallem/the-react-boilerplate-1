import { Helmet } from 'react-helmet-async'
import Test from './Test'
import { useMessages } from 'app/hooks'
import messages from './messages.json'

const TestPage = () => {
  const t = useMessages('test')

  return (
    <>
      <Helmet>
        <title>{t(messages.title)}</title>
      </Helmet>
      <Test />
    </>
  )
}

export default TestPage
