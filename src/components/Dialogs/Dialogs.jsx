import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import NoteInput from "../NoteInput/NoteInput";

import './Dialogs.css';


const Dialogs = ({ dialogsData, dispatch }) => {
    const dialogItems = dialogsData.dialogs.map((dialog, index) => {
        return (
            <DialogItem key={`${dialog.id}_${index}`}
                        dialogData={dialog} />
        )
    });

    const messages = dialogsData.messages.map((message, index) => {
        return (
            <Message key={`${message.id}_${index}`}
                     messageData={message} />
        )
    });

    return (
        <React.Fragment>
            <div className='Dialogs'>
                <ul className='Dialogs-leftColumn'>
                    {dialogItems}
                </ul>
                <ul className='Dialogs-rightColumn'>
                    {messages}
                </ul>
            </div>
            <NoteInput inputValue={dialogsData.newMessageText}
                       dispatch={dispatch}
                       location='dialogs' />
        </React.Fragment>

    );
};

export default Dialogs;
