const ADD_MESSAGE = 'ADD-MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let text = action.newMessageText
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: text }]
            }
        }
        default:
            return state
    }
}

// Dialogs page
export const addMessageActionCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;