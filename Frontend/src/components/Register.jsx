import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../redux/action'
import Cookies from 'js-cookie'

export default function Register() {
    
    const [data,setdata]=useState({
        name:"",
        email:"",
        password:"",
   })
    const navigate = useNavigate()
    const dispatch=useDispatch()
  
    useEffect(()=>{
        if(Cookies.get("Token")){
            return navigate("/")
        }
        else{
            return navigate("/register")
        }
       },[])

    const update=(target)=>{
           setdata({
               ...data,
               [target.name]:target.value
           })
        }
  return (
         <>
            <div className="vh-100 d-flex justify-content-center align-items-center ">
        <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white " style={{
            width: '400px',
            position:"absolute",
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex:1
        }}>
            <h2 className="text-center mb-4 text-primary">Register Form</h2>
            <form>
                <div className="mb-3 ">
                    <label  className="form-label">Full Name</label>
                    <input type="text" onChange={(e)=>update(e.target)} name="name" className="form-control border border-primary"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 ">
                    <label  className="form-label">Email address</label>
                    <input type="email" onChange={(e)=>update(e.target)} name="email" className="form-control border border-primary"  aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" onChange={(e)=>update(e.target)} name="password" className="form-control border border-primary"  />
                </div>
                
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit" onClick={async(e)=>{
                  e.preventDefault()
                 if(data.email===""|| data.name==="" || data.password===""){
                     return alert("All fields required")
                 }
                 await dispatch(register(data))
                 .then(()=>{
                     if(Cookies.get("Token")){
                        navigate("/")
                     }
                    
                    })
              }}> Register</button>
                </div>
            </form>
            <div className="mt-3">
                <span className="mb-0  text-center">I have an account? <span onClick={()=>{navigate("/login")}} className="text-primary fw-bold">
                    SignIn</span></span>
            </div>
        </div>
    </div>

    </>
    
  )
}
