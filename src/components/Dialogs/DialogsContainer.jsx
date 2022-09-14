import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage

    const sendMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (text) => {
        const action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return ( <Dialogs 
                updateNewMessageText={onMessageChange} 
                sendMessage={sendMessage}
                dialogsPage={state} /> )
}

export default DialogsContainer