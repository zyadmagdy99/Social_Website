"use client"
import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Poster from './_components/Post'
import { useDispatch, useSelector } from 'react-redux'
import { postsAPI } from '@/lib/Posts'
import { store } from '@/lib/store'
import { Posts } from './_interfaces/posts'
import  Loading  from "./loading"

export default function Home() {
  let dispatch = useDispatch<typeof store.dispatch>()
  let { allPosts } = useSelector((state:ReturnType<typeof store.getState>)=>state.post)
  console.log(allPosts);
  
  useEffect(()=>{
    dispatch(postsAPI(12))
  },[])
  return (
    <>
            {allPosts?.length> 0?  <Grid container sx={{marginBlock:"30px"}} spacing={4}>
        <Grid item sm={3}>
          
        </Grid>
        <Grid sx={{paddingBlock:"20px"}} item sm={6}>
        {allPosts?.map((postObj:Posts)=><Poster postObj={postObj} key={postObj._id}/>)}
          
        </Grid>
        <Grid item sm={3}>
         
        </Grid>
        
      </Grid>   : <Loading/> }

   
    </>
  )
}
