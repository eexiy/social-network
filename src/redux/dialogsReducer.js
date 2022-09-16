const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
    usersData: [
        { id: 1, name: 'Lily' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Sue' }
    ],
    messagesData: [
        { id: 1, message: 'Hi! How are you?' },
        { id: 2, message: 'I`m fine, and you?' },
        { id: 3, message: 'Good' },
        { id: 4, message: 'Yo' }
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 6, message: text }]
            }
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default:
            return state
    }
}

// Dialogs page
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text })


export default dialogsReducer;