import React, { createContext, useState } from 'react'

const initialValues = {
    title:"",
    imageUrl:"",
    content:"No Info",
    email:"",
    date:"",
    favorites:0
}

export const BlogContext = createContext();

const BlogContextProvider = (props) => {
    const [info, setInfo] = useState(initialValues);









   const value= {
        info,
        setInfo,
    }
  return (
    <BlogContext.Provider value={value}>
        {props.children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider