
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
  addMessage() {
    const newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messagesData.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber(this._state)
  },
  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 5,
        post: this._state.profilePage.newPostText,
        likes: 0
      }
      this._state.profilePage.postsData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  }
}
window.state = store
export default store
