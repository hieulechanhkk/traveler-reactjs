import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './../../../../redux/actions/index'
function TicketItem(props) {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(actions.TRIGGERFORM(true))
        dispatch(actions.PICTURE({src:props.Ticket.src, name:props.Ticket.name}))
    }
    return (
        <div data-aos={props.index % 2 == 0 ? "fade-down-right" : "fade-down-left"} data-aos-anchor-placement='bottom-bottom' className={`ticket__item ${props.index % 2 != 0 ? 'ticket__right' : ''}`}>
            <img className="ticket__img" src={props.Ticket.src}>
            </img>
            <h2 data-aos="fade-down" className="heading__text">{props.Ticket.name}</h2>
            <button data-aos="fade-up" className="btn__ticket" onClick = {() => handleClick()}>BUY TICKET</button>
        </div>
    );
}

export default TicketItem;