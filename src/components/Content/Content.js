import React from 'react';
import ContentHeading from './Heading/ContentHeading';
import TicketContainer from './TicketContainer/TicketContainer';
function Content(props) {
    return (
        <div id = "content" className="content">
          <div className = "wrap">
            <ContentHeading></ContentHeading>
            <TicketContainer></TicketContainer>
          </div>
        </div>
    );
}

export default Content;