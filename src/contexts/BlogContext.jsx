// import React, { createContext, useState } from 'react'
// import {AddBlog,UpdateBlog,useFetch,updateFavorites }from "../helpers/functions";

// const initialValues = {
//     title:"",
//     imageUrl:"",
//     content:"No Info",
//     email:"",
//     date:"",
//     favorites:0
// }

// export const BlogContext = createContext();

// const BlogContextProvider = (props) => {
//     const [info, setInfo] = useState(initialValues);
//     const [updateVisible, setUpdateVisible] =useState(false);
//     const [details, setDetails] = useState(initialValues);

//     const handleFormSubmit = (e) => {
//       e.preventDefault();
//       if(info.id) {
//         setUpdateVisible(false)
//         UpdateBlog(info)
//         setInfo(initialValues)
//       }else{
//         AddBlog(info)
//         setInfo(initialValues)
//       }
//     }

//     const updateHandler = (id,title,imageUrl,content,favorites,email,date) => {
//       console.log(title);
//       setInfo({id,title,imageUrl,content,favorites,email,date})
//     }




//    const value= {
//     info,
//     details,
//     setDetails,
//     setInfo,
//     handleFormSubmit,
//     updateVisible,
//     updateHandler,
//     updateFavorites,
//     setUpdateVisible,
//     useFetch
//     }
//   return (
//     <BlogContext.Provider value={value}>
//         {props.children}
//     </BlogContext.Provider>
//   )
// }

// export default BlogContextProvider