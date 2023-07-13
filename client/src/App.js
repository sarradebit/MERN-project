
import './App.css';
import ResponsiveAppBar from "./Components/NavBar/ResponsiveAppBar" 
import { Route , Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"  
import Error from "./Pages/Error/Error"
import AddContact from "./Pages/AddContact/AddContact"
import ListContacts from "./Pages/ListContacts/ListContact"
import EditContact from "./Pages/EditContact/EditContact"
import LoginUser from './Pages/LoginUser/LoginUser';
import RegisterUser from './Pages/RegisterUser/RegisterUser';
import UpdatePassword from './Pages/UpdatePassword/UpdatePassword';
import { useEffect } from 'react';
import { current } from './JS/Actions/user';
import { useDispatch, useSelector } from 'react-redux';
import Successnotif from './Components/Successnotif/Successnotif';
import Errornotif from './Components/Errornotif/Errornotif';

function App() {

  const isAuth = useSelector(state => state.userReducer.isAuth)

  const usererrors = useSelector(state=>state.userReducer.errors)
  const usersuccess = useSelector(state=>state.userReducer.success)

  const dispatch = useDispatch()
  useEffect(() => {
if(localStorage.getItem("token")){
  dispatch(current())
}
  },[dispatch])
  
  return (
    <div className="App">

   {usersuccess && usersuccess.map((el)=> <Successnotif success={el}/>)}
   {usererrors && usererrors.map((el)=> <Errornotif errors={el}/>)}

   <ResponsiveAppBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/*" element={<Error/>} />
    {isAuth ? <Route path="/AddContact" element={<AddContact/>} />  : null }
    
    <Route path="/ListContact" element={<ListContacts/>} />
    <Route path="/EditContact/:id" element={<EditContact/>} />
    <Route path="/login" element={<LoginUser/>} />
    <Route path="/register" element={<RegisterUser/>} />
    <Route path="/updatepassword/:id" element ={<UpdatePassword/>} />
   </Routes>
    
    </div>
  );
}

export default App;
