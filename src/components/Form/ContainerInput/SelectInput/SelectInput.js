import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../../../redux/actions/index'
import {toast} from 'react-toastify'
function SelectInput(props) {
    const place = useSelector(state => state.Picture.name)
    const adults = useSelector (state => state.InputForm)
    const [select, setSelect] = useState('')
    const [name,setName] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const time = useSelector(state => state.InputForm)
    const dispatch = useDispatch()
    const SelectInput = (e) => {
        setSelect(e.target.value)
    }
    const onInputName = (e) => {
        setName(e.target.value)
    }
    const onInputPhone = (e) => {
        setPhonenumber(e.target.value)
    }
    function removeAscent (str) {
        if (str === null || str === undefined) return str;
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
      }
    const validate = () => {
        const reGexPhoneNumber = /((09|03|07|08|05)+([0-9]{8})\b)/g
        const reGexName = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/g
        if(reGexPhoneNumber.test(phonenumber) && adults.adults > 0 && time.departing != null && time.returning != null)
            return true
        else
            return false
    }
    const onCheck = () => {
        
        if(validate())
        {
            dispatch(actions.INPUTINFO({
                class: select,
                name:name,
                phonenumber:phonenumber,
                to:place
            }))
            toast.success("Check Out Success :)",{theme:"dark"})
        }
        else
        {
            toast.error("Wrong Information !!!  :(", {theme:"dark"})
        }
    }
    return (
        <div>
            <select className="select__input" onChange = {(e) => SelectInput(e)}>
                <option>First Class</option>
                <option>Business Class</option>
                <option>Premium Class</option>
                <option>Deluxe Economy Class</option>
                <option>Comfort Class</option>
            </select>
            <input className = "select__input" placeholder = "Full Name" onChange = {(e) => onInputName(e)}></input>
            <input className = "select__input" placeholder = "Phone Number" onChange = {e => onInputPhone(e)}></input>
            <button className="btn__checkout" onClick = {() => onCheck()}>Check Out</button>
        </div>
    );
}

export default SelectInput;