import { Posts } from "@/app/_interfaces/posts";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState: {allPosts :Posts[] |null , singlepost :Posts | null} ={allPosts :null , singlepost:null};

export let postsAPI = createAsyncThunk("posts/posts",async (limit?:number)=>{
   return await axios.get(`https://linked-posts.routemisr.com/posts?limit=${limit || 10}`,{
        headers:{
            token : localStorage.getItem("token")
        }
    }).then((res)=>res)
    .catch((err)=>err)
})
export let single = createAsyncThunk("posts/single",async (id:string)=>{
   return await axios.get(`https://linked-posts.routemisr.com/posts/${id}`,{
        headers:{
            token : localStorage.getItem("token")
        }
    }).then((res)=>res)
    .catch((err)=>err)
})

export let postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postsAPI.fulfilled,(state,action)=>{
            state.allPosts=action.payload.data.posts
            
        });
        builder.addCase(single.fulfilled,(state,action)=>{
            state.singlepost=action.payload.data.post;
            
        });
    },
})

export let postslice = postSlice.reducer