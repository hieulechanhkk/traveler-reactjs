import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoheading from './../../github.png'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from './../../redux/actions/index'
function NavBar(props) {
    const navChoose  = useSelector(state => state.NavBar)
    const dispatch = useDispatch()
    return (
        <nav data-aos = "fade-down" className="nav__bar ">
            <ul className="list__nav">
                <Link className = {`Link ${navChoose==1 ? 'choose__btn':''}`}  to='/home' onClick = {() => dispatch(actions.SWITCHPAGE(1))}><li className="nav__item">HOME</li></Link>
                <Link className = {`Link ${navChoose==2 ? 'choose__btn':''}`}  exact to='/' onClick = {() => dispatch(actions.SWITCHPAGE(2))}><li className="nav__item">INTRODUCTION</li></Link>
                <Link className = {`Link ${navChoose==3 ? 'choose__btn':''}`}  exact to ='/' onClick = {()=> dispatch(actions.SWITCHPAGE(3))}><li className="nav__item">CONTACT</li></Link>
            </ul>
            <img className="Logo" src={logoheading}></img>
        </nav>
    );
}

export default NavBar;