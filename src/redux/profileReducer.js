const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const initialState = {
    postsData: [
        { id: 1, post: 'Hi! how are you?', likes: 15 },
        { id: 2, post: 'It\'s my first post', likes: 8 }
    ],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newText = state.newPostText
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, { id: 5, post: newText, likes: 0 }]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return { 
                ...state,
                newPostText: action.newText
            }
        }

        default:
            return state
    }
}

// Profile page
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export default profileReducer;