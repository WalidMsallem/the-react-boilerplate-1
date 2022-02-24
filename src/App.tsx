import React, { Suspense, useState, useEffect } from 'react'
// import { Route, Routes, Navigate } from 'react-router-dom'
import routes from './routes'
import Routes from './components/base/RoutesHandler'
import Loading from './components/base/Loading'
import Providers from './Providers'
function App() {
  // const [tasks, setTasks] = useState<{}>([
  //   {
  //     id: '1',
  //     title: 'title 1',
  //     description: 'desc &',
  //   },
  //   {
  //     id: '2',
  //     title: 'title 2',
  //     description: 'desc &',
  //   },
  // ])

  // const handleAddTask = task => {
  //   // setTasks(prev => [...prev, task])
  //   const newTask = {
  //     ...task,
  //     id: tasks.length + 1,
  //   }
  //   setTasks([...tasks, newTask])
  // }

  // const handleDeleteTask = id => {
  //   setTasks(prev => [...prev].filter(element => element.id !== id))
  // }

  // const handleEditTask = (id, payload) => {
  //   setTasks(prev =>
  //     [...prev].map(element => {
  //       if (element.id === id) {
  //         return { ...element, ...payload }
  //       }
  //       return element
  //     }),
  //   )
  // }
  console.log('routes', routes)

  return (
    <Providers>
      <Suspense fallback={<Loading />}>
        <Routes routes={routes} />
      </Suspense>
    </Providers>
  )
}

export default App
