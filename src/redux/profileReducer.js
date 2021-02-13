const addPostActionType = 'addPost';
const updateNewPostTextActionType = 'updateNewPostText';

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: updateNewPostTextActionType,
        text,
    };
};

export const addNewPostActionCreator = () => ({type: addPostActionType});

const profileReducer = (state, action) => {
    switch (action.type) {
        case addPostActionType:
            const newPost = {
                id: 6,
                user: 'Mark Wilan',
                text: state.newPostText,
                likesNumber: 2
            }
            state.posts.push(newPost);
            state.newPostText = '';

            break;

        case updateNewPostTextActionType:
            state.newPostText = action.text;
            break;

        default: break;
    }

    return state;
};

export default profileReducer;