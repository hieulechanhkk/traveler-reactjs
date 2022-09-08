import * as ActionsType from './../../Constants/ActionsType'
const initialState = false
const Form = (state = initialState, action) => {
    switch(action.type)
    {
        case ActionsType.TRIGGERFORM:
            state = action.signal
            return state
        default: return state
    }
}

export default Form