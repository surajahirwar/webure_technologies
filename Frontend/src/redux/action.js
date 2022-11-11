
// import { Navigate } from "react-router-dom"
import Cookies from 'js-cookie'
export const ADD_USER="ADD_USER"
export const AUTH="AUTH"
 
const addUser=(data)=>{
    return {
        type:ADD_USER,
        payload:data
    }
}


export const Auth=(data)=>{
    return {
        type:AUTH,
        payload:data
    }
}

export const login=(data,setCookie)=>{
       return async(dispatch,getState,api)=>{
           try {
               const res=await fetch("http://localhost:5000/login",{
                   method:"POST",
                   body:JSON.stringify(data),
                   headers: {
                    'Content-Type': 'application/json'
                   
                  },
               })
                  const received=await res.json()
                  if(received.Token && received.Name){
                  Cookies.set('Name',`${received.Name}`, { expires: 7 })
                  Cookies.set('Token',`${received.Token}`, { expires: 7 })
                  alert(received.message)
                  dispatch(addUser(received.message))
                  }
                  else{
                    if(received.errors){
                        alert(received.errors[0].msg)
                      }
                    if(received.message[0].msg){
                        alert(received.message[0].msg)
                    }
                    else{
                    alert(received.message)
                    }
                  }
                  
              } 
           catch (error) {
               console.log(error)
           }
       }
           
    
  
}
export const register=(data,setCookie)=>{
    
            return async(dispatch, getState, api) => {
               try {
                const res=await fetch("http://localhost:5000/register",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                       
                      },
                })
                const received=await res.json()
                if(received.Token && received.Name){
                Cookies.set('Name',`${received.Name}`, { expires: 7 })
                Cookies.set('Token',`${received.Token}`, { expires: 7 })
                alert(received.message)
                dispatch(addUser(received.message))
                
                }
                else{
                  
                    if(received.errors){
                    alert(received.errors[0].msg)
                  }
                  if(received.message[0].msg){
                      alert(received.message[0].msg)
                  }
                 
                  else{
                  alert(received.message)
                  }
                }
                
               } catch (error) {
                   console.log(error)
               } 
            }
          
       
     
       
    } 

    export const authenticate=(token)=>{
        return async(dispatch, getState, api) => {
            try {
                 const res=await fetch("http://localhost:5000/dashboard",{
                 method:"GET",
                 headers: {
                     'Content-Type': 'application/json',
                     'Authorization': `Bearer ${token}`
                   },
             })

            var received=await res.json()
    
                dispatch(Auth(received))
          } catch (error) {
                console.log(error.message)
            } 
         }
       
    }

