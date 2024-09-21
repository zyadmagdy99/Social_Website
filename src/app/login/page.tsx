"use client"
import React from 'react'
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogin } from '@/lib/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";



export default function login() {
  
  let router = useRouter();
  let dispatch = useDispatch()
  let formik = useFormik({
    initialValues:{
      email:"",
      password:"",
    },
    onSubmit:(val)=>{
      console.log(val);
      dispatch(userLogin(val))
      .then((res:any)=>{
        if(res.payload.message == "success"){
          toast.success("welcome =D")
          localStorage.setItem("token",res.payload.token)
          router.push("/")
        }else{
          toast.error(res.payload);
        }
      })
      .catch((err:any)=>{console.log(err);
      });
    
    },
  });
  return (
    <>
     <Container maxWidth="md">
     <Paper sx={{display:"flex",flexDirection:"column",padding:"15px",marginBlock:"20px",gap:"20px"}} elevation={20} >

      <form onSubmit={formik.handleSubmit} style={{display:"flex",flexDirection:"column",padding:"15px",marginBlock:"20px",gap:"20px"}}>
     <TextField onChange={formik.handleChange} name='email' value={formik.values.email} id="email" label="E-mail..." variant="standard" />
     <TextField onChange={formik.handleChange} value={formik.values.password} id="password" name='password' label="password..." variant="standard" />
     <Button type="submit" sx={{borderRadius:"10px"}} variant="contained">Submit</Button>

      </form>




      </Paper>

      </Container>
    </>
  )
}
