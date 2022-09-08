import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import * as actions from './../../redux/actions/index'
import { AiOutlineDoubleRight } from 'react-icons/ai'
function HomePage(props) {
    const dispatch = useDispatch()
    const sendChoose = (value) => {
        props.receiveData(value)
    }
    return (
            <div className="HomePage">
                <div data-aos="fade-right" className="form__about">
                    <h1 className = "title__homepage">TRAVELER</h1>
                    <p className = "content__homepage">TICKET SALE -50%</p>
                    <Link to = "/"><button className= "btn__homepage" onClick = {() => dispatch(actions.SWITCHPAGE(2))}>BUY NOW</button></Link>
               </div>
                <Link to = '/'> <button data-aos="fade-up" className="btn__goto" onClick = {() => dispatch(actions.SWITCHPAGE(2))}><AiOutlineDoubleRight></AiOutlineDoubleRight></button></Link>
            </div>
    );
}

export default HomePage;