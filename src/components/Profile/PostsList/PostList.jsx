import React from 'react';
import Post from "./Post/Post";

import './PostList.css';

const PostList = ({ posts }) => {
    return (
        <ul className='PostList'>
            {
                posts.map((post, index) => {
                    return (
                        <Post key={`${post.id}_${index}`} postData={post} />
                    );
                })
            }
        </ul>
    );
};

export default PostList;
