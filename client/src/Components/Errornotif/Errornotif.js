import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearErrorsUser } from '../../JS/Actions/user';
import { ToastContainer, toast } from 'react-toastify';

const Errornotif = ({errors}) => {



        const[show,setShow]= useState(true);
        const dispatch=useDispatch()
    
        useEffect(()=>{
            setTimeout(()=>{
                setShow(false)
                dispatch(clearErrorsUser());
            }, 3000)
        }, [show,dispatch])
        const customId= "";
  return (
    <div>
    {show&&(
        <div>
        {toast.error(errors.msg, {toastId: customId})} 
        <ToastContainer
       
position="top-right"
autoClose={1500}
hideProgressBar={true}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
className="toast-text"
limit={1}
/>
        
        
        
        
        </div>
    )}
    </div>
      
  )
}

export default Errornotif