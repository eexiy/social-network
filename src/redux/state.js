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
  },
  profilePage: {
    postsData: [
      { id: 1, post: 'Hi! how are you?', likes: 15 },
      { id: 2, post: 'It\'s my first post', likes: 8 }
    ]
  }
}


export const addPost = (postMessage) => {
  let newPost = {
    id: 5,
    post: postMessage,
    likes: 0
  }
  state.profilePage.postsData.push(newPost)
  rerenderEntireTree(state)
}
export default state
