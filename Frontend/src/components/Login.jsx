import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { login } from '../redux/action'

export default function Login() {
    const navigate = useNavigate()

    const dispatch=useDispatch()
    const [data,setData]=useState({
        email:"",
        password:""
    })
  
   useEffect(()=>{
    if(Cookies.get("Token")){
        return navigate("/")
    }
   },[])

   const update=(target)=>{
    setData({
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
            <h2 className="text-left mb-4 text-primary">Login Form</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input onChange={(e)=>update(e.target)} name="email" type="email" className="form-control border border-primary" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" onChange={(e)=>update(e.target)} name="password" className="form-control border border-primary" id="exampleInputPassword1" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit" onClick={async(e)=>{
                e.preventDefault()
               if(data.email==="" || data.password===""){
                   return alert("all fields required")
               }
                 await dispatch(login(data))
                    .then(()=>{
                        
                        if(Cookies.get("Token")){
                            navigate("/")
                         }
                       
                    
                 })
                  }} >Login</button>
                </div>
            </form>
            <div className="mt-3">
                <span className="mb-0  text-center">Don't have an account? <span onClick={()=> {navigate("/register")}} className="text-primary fw-bold">Sign Up </span></span>
            </div>
        </div>
    </div>
    </>

  )
}
