"use client"
import Poster from '@/app/_components/Post';
import Loading from '@/app/loading';
import { single } from '@/lib/Posts';
import { store } from '@/lib/store';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function singlepost(props:string) {
  let dispatch = useDispatch<typeof store.dispatch>();
  let { singlepost } = useSelector((state:ReturnType<typeof store.getState>
    
  )=>state.post)

    console.log(singlepost);
    
    console.log("props",props.params.id);
    useEffect(()=>{
        dispatch(single(props.params.id))
    },[])
  return singlepost ? <Box sx={{width:"50%",height:"200px",mx:"auto"}}><Poster postObj={singlepost}/></Box> : <Loading/>
}
