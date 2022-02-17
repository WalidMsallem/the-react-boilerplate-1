import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { ManagetaskStyled } from './Managetask.styled'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import React, { useState, useMemo, useEffect } from 'react'
import { Grid } from '@mui/material'
import { useTasks } from 'app/hooks'

import { Task } from '../../redux/tasks/tasks.type'

const Managetask = () => {
  const t = useMessages('managetask')
  const navigate = useNavigate()

  let [searchParams] = useSearchParams()

  const isEditPage = useMemo(
    () => (searchParams.get('task') ? true : false),
    [searchParams.get('task')],
  )

  const [form, setFrom] = useState({
    title: '',
    description: '',
    id: '',
  })
  const { createTask, state, editTask }: any = useTasks()

  useEffect(() => {
    const task = state.list.find(
      element => element.id === searchParams.get('task'),
    )
    task && setFrom(task)
  }, [searchParams.get('task')])

  const handleSubmit = () => {
    if (isEditPage) {
      editTask(form)
      navigate('/')
    } else {
      createTask(form)
      navigate('/')
    }
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    // console.log('e.target', e.target)
    setFrom(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  console.log('form', form)
  return (
    <ManagetaskStyled>
      <Grid
        container
        sx={{
          width: '40%',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '40vh',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          name="title"
          variant="outlined"
          onChange={e => handleChange(e)}
          value={form.title}
        />
        <TextField
          value={form.description}
          id="outlined-basic"
          label="Description"
          name="description"
          variant="outlined"
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid>
        <Button variant="contained" onClick={() => handleSubmit()}>
          {isEditPage ? 'Edit task' : 'Add task'}
        </Button>
        <Link to="/"> to home </Link>
      </Grid>
    </ManagetaskStyled>
  )
}

// type Props = {}

export default Managetask
