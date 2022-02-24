import { useMessages } from 'app/hooks'
import messages from './messages.json'
import { Header, Footer } from './Login.styled'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import { useNavigate } from 'react-router-dom'
import { useGlobal } from 'app/hooks'
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const Login = () => {
  const t = useMessages('login')
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { loginUser, state } = useGlobal()

  const [form, setFrom] = useState({
    userName: '',
    password: '',
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    // console.log('e.target', e.target)
    setFrom(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleSubmit = () => {
    loginUser(form)
  }
  // const toggleModal = () => setOpen(prev => !prev)
  console.log('state.isAuthentificated', state.isAuthentificated)
  const navigate = useNavigate()
  useEffect(() => {
    if (state.isAuthentificated) {
      handleClose()
      navigate('/')
    }
  }, [state.isAuthentificated])
  return (
    <div>
      <Button onClick={handleOpen}>Open modal To auth</Button>
      <Modal
        open={open}
        // open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // sx={{ background: 'red' }}
      >
        <Box sx={style}>
          <Header id="parent-modal-title">
            <Box sx={{ marginBottom: '10px' }}>Login modal</Box>
            <Divider />
          </Header>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
              id="outlined-basic"
              label="userName"
              variant="outlined"
              sx={{ marginBottom: '10px' }}
              name="userName"
              onChange={e => handleChange(e)}
              value={form.userName}
            />

            <TextField
              id="filled-basic"
              label="password"
              variant="filled"
              sx={{ password: '10px' }}
              name="password"
              onChange={e => handleChange(e)}
              value={form.password}
            />
          </Box>
          {state.login.error && <Box>{state.login.error}</Box>}
          <Footer>
            <Divider />

            <Box>
              <Button onClick={handleClose} variant="outlined">
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          </Footer>
        </Box>
      </Modal>
    </div>
  )
}

// type Props = {}

export default Login
