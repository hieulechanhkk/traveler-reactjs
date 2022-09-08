import React from 'react';
import Newyork from "./../../../img/newyork.jpg"
import London from "./../../../img/london.jpg"
import HaLong from "./../../../img/halongbay.jpg"
import Paris from "./../../../img/Paris.jpg"
import TicketItem from './TicketItem/TicketItem';
function TicketContainer(props) {
    const listTicket = [
        {
            name: 'NEWYORK',
            src:Newyork
        }, 
        {
            name: 'LONDON',
            src: London
        },
        {
            name: 'HA LONG BAY',
            src:HaLong
        },
        {
            name: 'PARIS',
            src:Paris
        }
        
    ]
    function setShowTicket () {
        var result = null 
        result = listTicket.map((Ticket,index) => 
        {
            return <TicketItem Ticket= {Ticket} key = {index} index = {index}></TicketItem>
        })
        return result
    }
    return (
        <div className='ticket__introduction'>
            {/* <div data-aos="fade-right" className="ticket__item ticket__left">
                <img className="ticket__img" src={Newyork}>
                </img>
                <h2 data-aos="fade-down" className="heading__text">NEW YORK CITY</h2>
                <button data-aos="fade-up" className="btn__ticket">BUY TICKET</button>
            </div>
            <div data-aos="fade-left" className="ticket__item ticket__right">
                <img className="ticket__img" src={London}></img>
                <h2 data-aos="fade-down" className="heading__text">LONDON</h2>
                <button data-aos="fade-up" className="btn__ticket">BUY TICKET</button>
            </div>
            <div data-aos='fade-right' className="ticket__item ticket__left">
                <img className="ticket__img" src={HaLong}></img>
                <h2 data-aos="fade-down" className="heading__text">HA LONG BAY</h2>
                <button data-aos="fade-up" className="btn__ticket">BUY TICKET</button>
            </div>
            <div data-aos="fade-left" className="ticket__item ticket__right">
                <img className="ticket__img" src={Paris}></img>
                <h2 data-aos="fade-down" className="heading__text">PARIS</h2>
                <button data-aos="fade-up" className="btn__ticket">BUY TICKET</button>
            </div> */}
            {
                setShowTicket()
            }
        </div>
    );
}

export default TicketContainer;