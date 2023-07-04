import axios from "axios" ;
import { ADD_CONTACT, FAIL_CONTACTS, GET_CONTACT, GET_CONTACTS, LOAD_CONTACTS } from "../ActionTypes/contact";




export const getContacts = () => async (dispatch) => {
    dispatch({type :LOAD_CONTACTS })
    try {
        let result = await axios.get('/api/contact/all-user')
 dispatch ({type : GET_CONTACTS, payload : result.data.listContacts })
    } catch (error) {
        dispatch ({type : FAIL_CONTACTS , payload : error.response})
    }
}
export const addContact = (newContact,navigate) => async (dispatch) => {
    dispatch({type :LOAD_CONTACTS }) 
    try {
        let result = await axios.post ('/api/contact/add-contact' , newContact)
        dispatch ({type : ADD_CONTACT , payload : result.data})
        navigate('/ListContact')
        dispatch (getContacts())
    } catch (error) {
        dispatch ({type : FAIL_CONTACTS , payload : error.response})
    }
}
export const deleteContact = (id) => async (dispatch)  => {
dispatch({type :LOAD_CONTACTS }) 
try {
    await axios.delete(`/api/contact/${id}`)
    dispatch (getContacts())
} catch (error) {
    dispatch ({type : FAIL_CONTACTS , payload : error.response})
}
}
export const editContact = (id,newContact ) => async (dispatch) => {
    dispatch({type :LOAD_CONTACTS }) 
    try {
        await axios.put(`/api/contact/${id}` , newContact)
        dispatch (getContacts())
    } catch (error) {
        dispatch ({type : FAIL_CONTACTS , payload : error.response})
    }
}

export const getOneContact = (id) => async (dispatch) => {
    dispatch({type :LOAD_CONTACTS }) 
    try {
        let result = await axios.get(`/api/contact/${id}`)
        dispatch ({type : GET_CONTACT , payload : result.data })
    } catch (error) {
        dispatch ({type : FAIL_CONTACTS , payload : error.response})
        
    }
}