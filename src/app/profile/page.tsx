"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from './../../lib/authSlice';
import { store } from '@/lib/store';

export default function profile() {

  let {userdata,usertoken} = useSelector((state: ReturnType <typeof store.getState>)=>state.auth);
  return (
    <>
    
    </>
  )
}
