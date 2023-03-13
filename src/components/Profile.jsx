import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useContextHook from '../customHook/useContextHook'

const Profile = () => {
  const context=useContextHook()
  const navigate = useNavigate()
  useEffect(()=>{
    if(Object.keys(context.login).length>0){
      navigate('/profile')
    }
    else{
      navigate('/login')
    }
  },[])
  return (
    <div>Profile</div>
  )
}

export default Profile