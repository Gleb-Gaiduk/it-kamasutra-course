import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

const addPostActionType = 'addPost';
const updateNewPostTextActionType = 'updateNewPostText';
const updateNewMessageTextActionType = 'updateNewMessageText';
const addNewMessageActionType = 'addNewMessage';

const store = {
    _state: {
        navBar: {},
        profilePage: {
            posts: [
                {id: 1, user: 'Alexis Clark', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', likesNumber: 2},
                {id: 2, user: 'Aneta Lorance', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', likesNumber: 6},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, user: 'Gleb Gaiduk'},
                {id: 2, user: 'Aneta Lorance'},
                {id: 3, user: 'Alexis Clark'}
            ],
            messages: [
                {id: 1, text: 'Hi there'},
                {id: 2, text: 'How are you doing?'},
                {id: 3, text: 'Great'},
                {id: 4, text: 'Where are you from?'},
                {id: 5, text: 'Any ideas?'},
            ],
            newMessageText: ''
        }
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navBar = navbarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    },
};

export default store;