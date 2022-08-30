import { rerenderEntireTree } from "../render"

const state = {
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
    newMessageText: 'dsa'
  },
  profilePage: {
    postsData: [
      { id: 1, post: 'Hi! how are you?', likes: 15 },
      { id: 2, post: 'It\'s my first post', likes: 8 }
    ],
    newPostText: ''
  }
}

window.state = state

export const addPost = () => {
  const newPost = {
    id: 5,
    post: state.profilePage.newPostText,
    likes: 0
  }
  state.profilePage.postsData.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}


export const addMessage = () => {
  const newMessage = {
    id: 6,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messagesData.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText
  rerenderEntireTree(state)
}


export default state
