import axios from "axios";
import {
  GET_CONTACTS_SUCC,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  DELETE_CONTACT_FAIL,
  ADD_CONTACT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCC,
  GET_CONTACT_FAIL,
  EDIT_CONTACT_SUCC,
  EDIT_CONTACT_FAIL
} from "../actionsType/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contacts"); // http/localhost:7000/api/contacts/
    console.log(result);
    dispatch({ type: GET_CONTACTS_SUCC, payload: result.data.listContacts });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};



//delete contact
export const deleteContact = (contactId) => async(dispatch)=>{
  try {
    await axios.delete(`/api/contacts/${contactId}`)
    dispatch(getContacts())
  } catch (error) {
    dispatch({type: DELETE_CONTACT_FAIL, payload: error.response.data})


    
  }
}


// add new contact

 export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post('/api/contacts' , newContact)
dispatch(getContacts())

  } catch (error) {
    dispatch({type: ADD_CONTACT_FAIL, payload: error.response.data})
    
  }
 }


 //toggle true

 export const toggleTrue = ()=>{
   return {
     type: TOGGLE_TRUE
   }
 }

 export const toggleFalse = ()=>{
  return {
    type: TOGGLE_FALSE
  }
}


//get contact
 export const getContact = (contactId) => async (dispatch) => {
 dispatch ({type: GET_CONTACT_LOAD})
  try {
    let result = await axios.get(`/api/contacts/${contactId}`)
    dispatch({type:GET_CONTACT_SUCC, payload: result.data.contactToFind})
 } catch (error) {
   dispatch({type:GET_CONTACT_FAIL , payload: error.response.data})
 }
 }

 //edit contact 
  export const editContact = (contactId, contact) => async(dispatch) => {
 
    try {
      await axios.put(`/api/contacts/${contactId}` , contact)
      dispatch({type: EDIT_CONTACT_SUCC})
      dispatch(getContacts())
    } catch (error) {
      dispatch({type: EDIT_CONTACT_FAIL, payload: error.response.data})
      
    }
  }