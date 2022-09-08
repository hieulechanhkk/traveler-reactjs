import React, { useEffect, useState } from 'react';
import RadioGroup from './RadioGroup/RadioGroup';
import ContainerInput from './ContainerInput/ContainerInput';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../redux/actions/index'
function Form(props) {
    const signal = useSelector(state => state.Form)
    const dispatch = useDispatch()
    const [show, setShow] = useState(signal)
    const setStyle = () => {
        return signal ? {display: 'flex'} : {display:'none'}
    }
    const handleClick = () => {
        dispatch(actions.TRIGGERFORM(false))
    }
    function stopProp (e) {
        e.stopPropagation();
    }
    return (
        <div style = {setStyle()} className={`container__fill`} onClick = {() => handleClick()}>
            <div className="container__infor" onClick = {(e) => stopProp(e)}>
                <RadioGroup></RadioGroup>
                <ContainerInput></ContainerInput>
            </div>
        </div>
    );
}

export default Form;