
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

function App() {
  return (
    <div className="App">
   <ResponsiveAppBar/>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/*" element={<Error/>} />
    <Route path="/AddContact" element={<AddContact/>} />
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
