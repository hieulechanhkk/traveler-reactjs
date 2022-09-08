import axios from 'axios'
import * as ActionsType from './../../Constants/ActionsType'

const initialState  = {choose: 0,departing:'', returning:'', adults: 0, children: 0, class: '', name: '', phonenumber:'',to:''}

const InputForm = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionsType.RADIO:
            state.choose = action.choose
            return state
        case ActionsType.DATE:
            state.departing = action.date.departing
            state.returning = action.date.returning
            state.adults = action.date.adults
            state.children  = action.date.children
            return state
        case ActionsType.INPUTINFO:
            state.class = action.info.class
            state.name = action.info.name
            state.phonenumber = action.info.phonenumber
            state.to = action.info.to
            axios.post('https://614ff976a706cd00179b7344.mockapi.io/Orders',state)
            return state
        default: return state
    }
}
export default InputForm