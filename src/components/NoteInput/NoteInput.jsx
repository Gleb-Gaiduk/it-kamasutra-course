import React from 'react';
import { updateNewPostTextActionCreator, addNewPostActionCreator } from '../../redux/profileReducer';
import { updateNewMessageTextActionCreator, addNewMessageTextCreator } from '../../redux/dialogsReducer';

import './NoteInput.css';

const NoteInput = ({ inputValue, dispatch, location }) => {
    const onInputChange = (e) => {
        const text = e.target.value;

        if (location === 'profile') {
            dispatch(updateNewPostTextActionCreator(text));
        } else if (location === 'dialogs') {
            dispatch(updateNewMessageTextActionCreator(text));
        }
    };

    const onPostSubmit = () => {
        if (location === 'profile') {
            dispatch(addNewPostActionCreator());
        } else if (location === 'dialogs') {
            dispatch(addNewMessageTextCreator());
        }
    };

    return (
        <div className='NoteInput'>
            <div className='NoteInput-form'>
                <img className='NoteInput-image'
                     src='https://themified.com/friend-finder/images/users/user-1.jpg'
                     alt='User avatar' />
                 <textarea className='NoteInput-textarea'
                           placeholder='Write what you wish'
                           value={inputValue}
                           onChange={onInputChange} />
            </div>
            <button className='NoteInput-button'
                    type='button'
                    onClick={onPostSubmit}>
                Send
            </button>
        </div>
    );
};

export default NoteInput;
