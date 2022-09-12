const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      postsData: [
        { id: 1, post: 'Hi! how are you?', likes: 15 },
        { id: 2, post: 'It\'s my first post', likes: 8 }
      ],
      newPostText: ''
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State rendered');
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    // Profile page
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
    // Dialogs page
    if (action.type === ADD_MESSAGE) {
      const newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messagesData.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber(this._state)
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText
      this._callSubscriber(this._state)
    }
  }
}

// Profile page
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

// Dialogs page
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

window.state = store
export default store
