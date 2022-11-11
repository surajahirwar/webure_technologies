import {ADD_USER,AUTH} from "./action"

export const reducer=(store={user:{},tasks:undefined,home_pageData:{}},{type,payload})=>{
             switch(type){
               
                 case ADD_USER:
                     return {...store,user:payload}
                 case AUTH:
                    return {...store,home_pageData:payload}
                 default:
                     return store
             }
}