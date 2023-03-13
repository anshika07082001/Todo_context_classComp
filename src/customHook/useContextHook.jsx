import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const useContextHook = (login) => {
//  console.log(login)
 const context = useContext(UserContext)
 return context
}

export default useContextHook