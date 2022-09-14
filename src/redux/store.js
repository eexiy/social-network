import { dialogsReducer } from "./dialogsReducer"
import { profileReducer } from "./profileReducer"

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    // Dialogs page
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._callSubscriber(this._state)
  }
}





window.state = store
export default store
