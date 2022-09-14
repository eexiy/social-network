import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';



const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                    let state = store.getState().dialogsPage

                    const sendMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }

                    const onMessageChange = (text) => {
                        const action = updateNewMessageTextActionCreator(text)
                        store.dispatch(action)
                    }
                    return <Dialogs
                            updateNewMessageText={onMessageChange}
                            sendMessage={sendMessage}
                            dialogsPage={state} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer