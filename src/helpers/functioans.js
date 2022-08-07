import { toastSuccessNotify } from "./ToastNotify";
import { getDatabase,ref,push,set,onValue, remove,update } from "firebase/database";
import { useState } from 'react';
import { useEffect } from 'react';

export const AddBlog = (info) => {
    const db = getDatabase();
    const blogRef = ref(db,"blog");
    const newBlogRef = push(blogRef);
    Set((newBlogRef), {
        title:info.title,
        imageUrl:info.imageUrl,
        email:info.email,
        content:info.date,
        favorites:info.favorites
    });
    toastSuccessNotify("Add blog successfully")
}

export const useFetch = ()=>{
    const [isLoading,setIsLoading] = useState();
    const [blogList,setBlogList] =useState()
    useEffect(()=>{
        setIsLoading(true);
        const db = getDatabase();
        const blogRef = ref(db,"blog");
        onValue(blogRef,(snapshot)=>{
            const data = snapshot.val();
            const blogArr = [];
            for(let id in data){
                blogArr.push({
                    id, ...data[id]
                })
            }
            setBlogList(blogArr);
            console.log(data);
            setIsLoading(false);
        })

    },[])
    return {isLoading,blogList}
}