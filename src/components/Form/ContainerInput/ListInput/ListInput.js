import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from './../../../../redux/actions/index'
function ListInput(props) {
    const [ADULTS,setADULTS] = useState(0)
    const [CHILDREN, setCHILDREN] = useState(0)
    const [DEPARTING, setDEPARTING] = useState()
    const [RETURNING, setRETURNING] = useState()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.DATE({
            departing:DEPARTING, 
            returning:RETURNING,
            adults:ADULTS,
            children:CHILDREN
        }))
    },[ADULTS,CHILDREN,DEPARTING,RETURNING])
    const setAdults = (value) => {
        if(ADULTS>=0 && ADULTS+value != -1)
            setADULTS(ADULTS+value)
    }
    const setChildren = (value) => {
        if(CHILDREN>=0 && CHILDREN+value != -1)
            setCHILDREN(CHILDREN+value)
    }
    const handleDeparting = (e) => {
        setDEPARTING(e.target.value)
    }
    const handleReturning = (e) => {
        setRETURNING(e.target.value)
    }
    return (
        <div className="list__input">
            <div className="form__input">
                <span className="title__input">DEPARTING</span>
                <input className="input__text" type="datetime-local" onChange = {(e) => handleDeparting(e)}></input>
            </div>
            <div className="form__input">
                <span className="title__input amountt">RETURNING</span>
                <input className="input__text" type="datetime-local" onChange = {(e) => handleReturning(e)}></input>
            </div>
            <div className="form__input">
                <span className="title__input amount">ADULTS(18+)</span>
                <div className="amount__form">
                    <button className="btn__amount" onClick = {() => setAdults(-1)}>-</button>
                    <span>{ADULTS}</span>
                    <button className="btn__amount" onClick = {() => setAdults(1)}>+</button>
                </div>
            </div>
            <div className="form__input amount">
                <span className="title__input">CHILDREN(1-17)</span>
                <div className="amount__form">
                    <button className="btn__amount" onClick ={() => setChildren(-1)} >-</button>
                    <span>{CHILDREN}</span>
                    <button className="btn__amount" onClick ={() => setChildren(1)}>+</button>
                </div>
            </div>
        </div>
    );
}

export default ListInput;