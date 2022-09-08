import * as ActionsType from './../../Constants/ActionsType'


export const TRIGGERFORM = (signal) => {
    return {
        type: ActionsType.TRIGGERFORM,
        signal
    }
}
export const PICTURE = (information) => {
    return {
        type:ActionsType.PICTURE,
        information
    }
}

export const RADIO = (choose) => {
    return {
        type: ActionsType.RADIO,
        choose
    }
}

export const DATE = (date) => {
    return {
        type: ActionsType.DATE, 
        date
    }
}

export const INPUTINFO = (info) => {
    return {
        type: ActionsType.INPUTINFO,
        info
    }
}

export const SWITCHPAGE = (navigation) => {
    return {
        type: ActionsType.SWITCHPAGE,
        navigation
    }
}