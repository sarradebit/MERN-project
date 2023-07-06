import { CLEAR_ERRORSUSER, CLEAR_SUCCESSUSER, CURRENT_USER, FAIL_USER, LOAD_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../ActionTypes/user"




const initialState = {
    user : null , 
    loadUser : false , 
    isAuth : false ,
    newUser : {} ,
    errors : null ,
    success : null ,

}

 const userReducer = (state = initialState , {type , payload}) => {
 switch(type)
 {
case LOAD_USER :
     return {...state , loadUser : true}
case REGISTER_USER :
        localStorage.setItem("token" , payload.token)
    return {...state , loadUser : false , newUser : payload.newUser , success : payload.success , isAuth : true}
case LOGIN_USER :
        localStorage.setItem("token" , payload.token)
    return {...state , loadUser : false , user : payload.user , isAuth : true, success : payload.success}
case CURRENT_USER :
    return {...state , user : payload , isAuth : true , loadUser : false}
case LOGOUT_USER :
    localStorage.removeItem("token")
    return {
        user : null ,
        loadUser : false , 
        isAuth : false ,
        newUser : {} ,
        errors : null ,
        success : null 
    } 
case FAIL_USER :
        return {...state , loadUser : false , errors : payload}
case CLEAR_ERRORSUSER :
        return {...state , errors : null }
case CLEAR_SUCCESSUSER : 
        return {...state , succes : null }
    
    
        default :
    return state ;    

    }
 }

 export default userReducer