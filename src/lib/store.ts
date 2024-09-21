"use client"
import { configureStore } from "@reduxjs/toolkit";
import { auth } from "./authSlice";
import { postslice } from "./Posts";

export let store = configureStore({
    reducer:{
        auth:auth,
        post:postslice,
    },
})
