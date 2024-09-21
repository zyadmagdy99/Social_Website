"use client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState: { userdata : null | any , usertoken : null | string , isLoading : boolean , isError : boolean | null | any} =
 { userdata : null, usertoken : null , isLoading : false , isError : null}
  export let userLogin =  createAsyncThunk("auth/userLogin",async (val:{email : string ; password : string})=>{
   return await axios.post("https://linked-posts.routemisr.com/users/signin",val)
    .then((res)=>{
        console.log(res);
        return res.data;
        
    })
    .catch((err)=>{
        console.log(err);
        return err.response.data.error;
        
    })
  })
let authSlice = createSlice({
    name:"auth",
    initialState,
    extraReducers:(builder)=>{

        builder.addCase(userLogin.fulfilled,(state,action)=>{
            state.isLoading = false
        });

        builder.addCase(userLogin.pending,(state,action)=>{
            state.isLoading = true
        });
        builder.addCase(userLogin.rejected,(state,action)=>{
            state.isError = action.payload;
            state.isLoading = false

        });
    },
    reducers:{
        removedata:(state , action)=>{state.userdata = null;
            state.usertoken=null;

        }
    }
})

export let auth = authSlice.reducer;
export let { removedata } = authSlice.actions