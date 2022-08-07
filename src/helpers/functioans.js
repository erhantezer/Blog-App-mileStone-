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