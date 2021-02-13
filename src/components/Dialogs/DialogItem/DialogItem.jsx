import React from 'react';

import './DialogItem.css';

const DialogItem = ({ dialogData }) => {
    return (
        <li className='DialogItem'>
            {dialogData.user}
        </li>
    );
};

export default DialogItem;
