import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useState} from 'react'
import * as actions from './../../../redux/actions/index'
function RadioGroup(props) {
    const picture = useSelector(state => state.Picture.src)
    const [choose, setChoose] = useState(0)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actions.RADIO(choose))
    },[choose])
    return (
        <div className="radio__group">
            <div className="radio__choose">
                <div className="radio">
                    <input type="radio" className="choose__way" checked = {choose == 0 ? true: false} onClick = {() => setChoose(0)}></input>
                    <span>Roundtrip</span>
                </div>
                <div className="radio">
                    <input type="radio" className="choose__way" checked = {choose == 1 ? true: false} onClick = {() => setChoose(1)}></input>
                    <span>One way</span>
                </div>
                <div className="radio">
                    <input className="radio" type="radio" className="choose__way" checked = {choose == 2 ? true: false} onClick = {() => setChoose(2)}></input>
                    <span>Multi-City</span>
                </div>
            </div>
            <img className="img__ticket" src={picture}></img>
        </div>
    );
}

export default RadioGroup;