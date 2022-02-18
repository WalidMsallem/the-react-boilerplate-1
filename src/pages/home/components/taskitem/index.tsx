import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Item, TaskItemStyled } from './Taskitem.styled'
import { useNavigate } from 'react-router-dom'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation'
import { Grid } from '@mui/material'
import React from 'react'
import { useTasks } from 'app/hooks'
type TaskitemPropType = {
  id: string
  title: string
  description: string
}
const Taskitem = ({ id, title, description }: TaskitemPropType) => {
  const t = useMessages('taskitem')
  const navigate = useNavigate()
  const { deleteTask, state }: any = useTasks()
  console.log('state.deleteTask.loading', state.deleteTask.loading)
  return (
    <TaskItemStyled>
      <Grid sx={{ flex: 11 }}>
        <Item size="22"> {title} </Item>
        <Item size="17"> {description} </Item>
      </Grid>
      <Grid sx={{ flex: 1 }}>
        <DeleteRoundedIcon onClick={() => deleteTask(id)} />
        {state.deleteTask.loading ? (
          <div>loading</div>
        ) : (
          <ThreeDRotationIcon
            onClick={() => navigate(`/manage-task?task=${id}`)}
          />
        )}
      </Grid>
    </TaskItemStyled>
  )
}

// type Props = {}

export default Taskitem
