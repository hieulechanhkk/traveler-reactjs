import React from 'react';
import { BsChevronDown } from 'react-icons/bs'
function Slider(props) {
    return (
        <div data-aos = "fade-right" className="Slider">
            <h1 data-aos="zoom-out" className="heading">DISCOVER</h1>
            <span data-aos="zoom-in" className="heading__slogan">THE WORLD</span>
            <p data-aos="fade-right" className="slogan">Let's go travel</p>
            <div className="container__nav">
                <span data-aos="fade-left" className="scroll__text">SCROLL DOWN</span>
                <a href="#content"><div data-aos="fade-up" className="down__button"><BsChevronDown className = "btn__button__down"></BsChevronDown></div></a>
            </div>
        </div>
    );
}

export default Slider;