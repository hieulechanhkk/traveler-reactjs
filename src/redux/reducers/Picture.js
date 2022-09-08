import * as Type from './../../Constants/ActionsType'
const initialState = {src: undefined, name:''}

const Picture = (state = initialState, action) => {
    switch(action.type)
    {
        case Type.PICTURE: 
            state.src = action.information.src
            state.name = action.information.name
            console.log(state);
            return state
        default: return state
    }
}

export default Picture