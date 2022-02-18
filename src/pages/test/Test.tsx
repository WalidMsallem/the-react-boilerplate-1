import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Title } from './Test.styled'

const Test = () => {
  const t = useMessages('test')
  return (
    <div>
      <Title>{t(messages.hello)}</Title>
    </div>
  )
}

// type Props = {}

export default Test
