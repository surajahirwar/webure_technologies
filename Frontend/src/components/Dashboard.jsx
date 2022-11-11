import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { authenticate } from '../redux/action'
import jwtDecode from "jwt-decode";


export default function Dashboard() {

    
      const Name=Cookies.get("Name")
      const token=Cookies.get("Token")
      const [newdata, setnewdata] = useState([])

      const dispatch = useDispatch()
      const navigate = useNavigate()
      const data = useSelector((store)=> store.home_pageData)
    //   console.log(data.data)
  useEffect(()=>{

    if(!token){
            navigate('/login')
    }
        dispatch(authenticate(token))
    
            const user = jwtDecode(token);
            setnewdata(user)
    
  },[])

    
  return (
    <>
        <div>
        <nav className="navbar bg-light" style={{
            width:"100%",
            height: "64px",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
        }}>
            <div className="container-fluid">
                <a className="navbar-brand">Webure Technologies</a>
                <form className="d-flex">
                <button className="btn btn-outline-success" onClick={()=>{
                        {Name ? (Cookies.remove('Name'),
                                Cookies.remove('Token'),
                                navigate("/login")):(navigate("/login"))}
             
               }} >{Name ? (Name+"(logout)"):("login")}</button>
                </form>
            </div>
            </nav>
            </div>
            <div style={{
            width: '400px',
            position:"absolute",
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            zIndex:1
        }}  >
                <h4 className="badge bg-primary text-wrap">Name</h4>{newdata.name}
                <h4 className="badge bg-primary text-wrap">Email</h4>{newdata.email}
            </div>
                
            </>
  )
}
