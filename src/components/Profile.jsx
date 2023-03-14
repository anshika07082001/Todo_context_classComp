import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useContextHook from '../customHook/useContextHook'
import Navbar from './Navbar'

const Profile = () => {
  const context=useContextHook()
  const navigate = useNavigate()
  useEffect(()=>{
    if(Object.keys(context.login).length>0){
      navigate('/profile')
    }
  },[])

  const logoutHandler =()=>{
    context.setLogin({})
    navigate('/login')
  }
  // console.log(context.login.name)
  return (
    <>
    <Navbar/>
    <Box sx={{margin:'100px auto',width:'80%'}}>
      <Box sx={{margin:'auto',textAlign:'center',padding:'20px',boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}}>
      <Typography variant='h5'>User Name: {context.login.name}</Typography>
      <Typography variant='h5'>User Email: {context.login.email}</Typography>
      <Typography variant='h5'>User Password: {context.login.pwd}</Typography>
      <Button variant='contained' onClick={logoutHandler}>Log Out</Button>
      </Box>
    </Box>
    </>
  )
}

export default Profile