import React, { useState } from 'react'
import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { HomeStyled, TaskContainer } from './Home.styled'
import { Button } from '../../ui'
import Taskitem from './components/taskitem'
import { Link } from 'react-router-dom'
import { useTasks } from 'app/hooks'
import { Task } from '../../redux/tasks/tasks.type'
const Home = () => {
  const t = useMessages('home')

  const { state }: any = useTasks()

  const { list } = state

  console.log('list', list)
  return (
    <HomeStyled>
      <TaskContainer>
        {list.map((element: Task) => {
          return (
            <Taskitem
              key={element.id}
              id={element.id}
              title={element.title}
              description={element.description}
            />
          )
        })}
        <Link to="/manage-task">Go Add task</Link>
      </TaskContainer>
    </HomeStyled>
  )
}

// type Props = {}

export default Home
