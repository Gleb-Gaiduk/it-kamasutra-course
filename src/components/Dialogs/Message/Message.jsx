import React from 'react';

import './Message.css';

const Message = ({ messageData }) => {
    return (
        <li className='Message'>
            <img className='Message-avatar'
                 src='https://themified.com/friend-finder/images/users/user-2.jpg'
                 alt='Avatar images'/>
            <div className='Message-content'>
                <p className='Message-name'>{messageData.user}</p>
                <p className='Message-text'>
                    {messageData.text}
                </p>
            </div>
        </li>
    );
};

export default Message;
