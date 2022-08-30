import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addMessage, addPost, updateNewMessageText, updateNewPostText } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state} 
        addPost={addPost} 
        addMessage={addMessage} 
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>
  );
}
