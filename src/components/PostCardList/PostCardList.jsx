import { useState,useEffect,useCallback } from "react"
import axios from "axios"
import PostCard from "../PostCard"
import { usePost } from "./post-context"
import React from "react"
function PostCardList(){
    //const [post,setPost]= useState([])
    const{post,setPost} = usePost()
    /*const getData = useCallback(async () => {
        try {
            const data = await axios.get('https://dummyapi.io/data/v1/post', {
                headers: { 'app-id': import.meta.env.VITE_KEY }
            });
            const responseData = data.data;
            setPost([...responseData.data]);
        } catch (error) {
            console.log(error);
        }
    }, []); // Empty dependency array since axios.get is constant

    useEffect(() => {
        console.log("rendering");
        getData();
    }, [getData]); */

    useEffect(()=>{
        console.log("rendering")
        async function getData(){
            try{
                const data = await axios.get('https://dummyapi.io/data/v1/post',{
                    headers:{'app-id':import.meta.env.VITE_KEY}
                })
                const responseData = data.data
                
                setPost([...responseData.data])
            }
            catch(e){
                console.log(e)
            }
        }

        getData()
    },[post])
    
    return (
        <>
        {post.length===0?'Loading....':(post.map((item)=>{
            
            return (
                <PostCard 
                    content={item.text}
                    image={item.image}
                    authorName = {item.owner.firstName}
                    key={item.id}
                    publishedDate={item.publishDate}

                />
            )
        }))}
        </>
        

    )
}
export default React.memo(PostCardList)