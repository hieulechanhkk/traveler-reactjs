import * as ActionsType from './../../Constants/ActionsType'

const initialState = 2
const NavBar = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.SWITCHPAGE:
            state = action.navigation
            console.log(state)
            return state;
        default: return state;
    }
}

export default NavBar