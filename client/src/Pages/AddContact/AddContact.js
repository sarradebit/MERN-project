import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import { Button, CircularProgress,  TextField } from '@mui/material';
import {useState} from 'react'
import { addContact } from '../../JS/Actions/contact';


const Addcontact = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const load = useSelector((state) => state.contactReducer.load)
 
const [contact , setContact] = useState ({})
 const [file , setFile] = useState(null)


const handleChange = (e) => {
  setContact({...contact , [e.target.name] : e.target.value})
}
const handlePhoto = (e) => {
  setFile(e.target.files[0]) 
}
const handleadd = (e) => {
  e.preventDefault();
  let data = new FormData()
  data.append("name" , contact.name);
  data.append("phone" , contact.phone);
  data.append("email" , contact.email);
  data.append("image", file)
  dispatch(addContact(data,navigate))

}

return (
    <div>
      <h1> Add contact </h1>
      <TextField id="standard-basic" label="Name" variant="standard" onChange={handleChange}  type="text" name="name"/>
      <br/>
      <TextField id="standard-basic" label="email" variant="standard" onChange={handleChange}  type="email" name="email"/>
      <br/>
      <TextField id="standard-basic" label="phone" variant="standard"  onChange={handleChange} type="number"  name="phone"/>
      <br/>
      
      <input type="file" id="file-input" encType="multipart/form.data" onChange={handlePhoto}/>
      
    <br/>
      {load ?
      
      <Button variant="contained" color="success" onClick={handleadd} >
        <CircularProgress size="1.25rem" sx={{color: "white"}} />
        ADD contact
      </Button> :
      <Button variant="contained" color="success" onClick={handleadd} >
        ADD contact
      </Button> 
    }
    </div>
  )
}

export default Addcontact
