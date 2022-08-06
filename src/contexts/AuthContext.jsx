import React, { createContext, useEffect, useState } from 'react'
import { userObserver } from '../helpers/firebase'

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        userObserver(setCurrentUser)
    },[])

    const value = {
      currentUser,
      setCurrentUser,
     
    }
  return (
    <AuthContext.Provider value={value}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider