import React from 'react';
import './ProfileCard.css';

const ProfileCard = (props) => {
    return (
        <div className={`ProfileCard ${props.parentClassName}`}>
            <img className='ProfileCard-image' src='https://themified.com/friend-finder/images/users/user-1.jpg'/>
            <h2 className='ProfileCard-userName'>Gleb Gaiduk</h2>
        </div>
    );
};

export default ProfileCard;
