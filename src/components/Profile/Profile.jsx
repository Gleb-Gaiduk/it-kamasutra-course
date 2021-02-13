import React from 'react';

import NoteInput from '../NoteInput/NoteInput';

import './Profile.css';
import PostList from "./PostsList/PostList";
const Profile = ({ profileData, dispatch }) => {
    return (
        <div className='App-content'>
            <NoteInput inputValue={profileData.newPostText}
                       dispatch={dispatch}
                       location='profile' />
            <PostList posts={profileData.posts} />
        </div>
    );
};

export default Profile;
