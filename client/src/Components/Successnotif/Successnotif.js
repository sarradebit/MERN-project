import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearSuccessUser } from '../../JS/Actions/user';
import {toast , ToastContainer} from 'react-toastify';

const Successnotif = ({success}) => {
    const[show,setShow]= useState(true);
    const dispatch=useDispatch()

    useEffect(()=>{
        setTimeout(()=>{
            setShow(false)
            dispatch(clearSuccessUser());
        }, 3000)
    }, [show,dispatch])

    const customId= "";
  return (
    <div>
    {show&&(
        <div>
        {toast.success(success.msg, {toastId: customId})} 
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

export default Successnotif