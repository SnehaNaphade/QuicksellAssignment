import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket, users }) => {
  const user = users.find(user => user.id === ticket.userId);

  return (
    <div className="card">
        <h2 className='idname'>{ticket.id}</h2>
      <h2 className='title'>{ticket.title}</h2>
      {/* <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p> */}
      <p>Assigned to: {user ? user.name : 'Unknown'}</p>
    </div>
  );
};

export default TicketCard;
