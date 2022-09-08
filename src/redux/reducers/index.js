import { combineReducers } from "redux";
import Form from './Form'
import Picture from './Picture'
import InputForm from "./InputForm";
import NavBar from "./NavBar";
const Reducer = combineReducers({
    Form, 
    Picture, 
    InputForm, 
    NavBar
})

export default Reducer