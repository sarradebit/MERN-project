import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import React, { useState } from 'react'
import {Button} from '@mui/material'
import { useMatch , useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { updateUserPassword } from "../../JS/Actions/user";


const UpdatePassword = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
     const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const match = useMatch("/updatepassword/:id");
    const [newUser, setNewUser] = useState({});

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value});
      };

      const handleEdit = () => {
        dispatch(updateUserPassword(match.params.id , newUser , navigate))
        }; 

    

  return (
    <div>
    <br/>
      <h1>Update Password</h1>

     
      <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
      <InputLabel htmlFor="standard-adornment-password">Current password</InputLabel>
      <Input 
      onChange={handleChange}
      name='oldPassword'
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick= {handleClickShowPassword}
              onMouseDown= {handleMouseDownPassword}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
<br/>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
    <InputLabel htmlFor="standard-adornment-password">New password</InputLabel>
    <Input 
    onChange={handleChange}
    name='password'
      id="standard-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick= {handleClickShowPassword}
            onMouseDown= {handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>
<br/>
   <FormControl sx={{ m: 1, width: '25ch' }} variant="standard" >
  <InputLabel htmlFor="standard-adornment-password">Confirm new password</InputLabel>
  <Input 
  onChange={handleChange}
  name='confirmpassword'
    id="standard-adornment-password"
    type={showPassword ? 'text' : 'password'}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick= {handleClickShowPassword}
          onMouseDown= {handleMouseDownPassword}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    }
  />
</FormControl>
<br/>
<Button variant="contained" color="success" onClick={handleEdit} >Submit</Button>

    </div>
  )
}

export default UpdatePassword