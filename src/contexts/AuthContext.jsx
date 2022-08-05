import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = () => {
  const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        // useObserver(setCurrentUser)
    },[])

  return (
    <AuthContext.Provider value={{currentUser}}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider