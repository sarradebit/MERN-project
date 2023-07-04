import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch} from "react-redux"
import { useNavigate} from "react-router-dom"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteContact } from '../../JS/Actions/contact';

const ContactCard = ({contact}) => {
const dispatch = useDispatch();
const navigate = useNavigate();

  return (
    <div>
       <Card sx={{ maxWidth: 400 , mb : "6%" , width : 300}}>
      <CardMedia
        sx={{ height : 140}}
        image={contact.profile_img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {contact.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {contact.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {contact.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success" onClick={()=> navigate(`/EditContact/${contact._id}`)}>Edit</Button>
        <Button size="small" color="error" variant="contained" onClick={()=> dispatch(deleteContact(contact._id))} > Delete <DeleteOutlineIcon sx ={{ color : "white"}}/> </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default ContactCard
