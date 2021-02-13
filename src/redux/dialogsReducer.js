const updateNewMessageTextActionType = 'updateNewMessageText';
const addNewMessageActionType = 'addNewMessage';

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: updateNewMessageTextActionType,
        text,
    };
};

export const addNewMessageTextCreator = () => ({type: addNewMessageActionType});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case updateNewMessageTextActionType:
            state.newMessageText = action.text;
            break;

        case addNewMessageActionType:
            const newMessage = {
                id: 6,
                text: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            break;

        default: break;
    }
    return state;
};

export default dialogsReducer;