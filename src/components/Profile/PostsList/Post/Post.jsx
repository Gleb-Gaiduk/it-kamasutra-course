import React from 'react';

import './Post.css';
const Post = ({ postData }) => {
    return (
        <li className='Post'>
            <img className='Post-image'
                 src='https://themified.com/friend-finder/images/users/user-5.jpg' />
            <div className='Post-content'>
                <div className='Post-userInfo'>
                    <p className='Post-userName'>{postData.user}</p>
                    <div className='Post-reaction'>
                        <span className='Post-likeButton'>Like</span>
                        <span className='Post-likeCounter'>{postData.likesNumber}</span>
                    </div>
                </div>
                <p className='Post-text'>
                    {postData.text}
                </p>
            </div>
        </li>
    );
};

export default Post;
