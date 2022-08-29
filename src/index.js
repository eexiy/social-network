import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const usersData = [
  { id: 1, name: 'Lily' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Sue' }
]

const messagesData = [
  { id: 1, messages: 'Hi! How are you?' },
  { id: 2, messages: 'I`m fine, and you?' },
  { id: 3, messages: 'Good' },
  { id: 4, messages: 'Yo' }
]

const postsData = [
  { id: 1, post: 'Hi! how are you?', likes: 15 },
  { id: 2, post: 'It\'s my first post', likes: 8 }
]

root.render(
  <React.StrictMode>
    <App usersData={usersData}
      messagesData={messagesData}
      postsData={postsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
