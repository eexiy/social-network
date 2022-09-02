import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';



const Dialogs = (props) => {

    const usersElement = props.dialogsPage.usersData.map(user => <User name={user.name} id={user.id} />)
    const messagesElement = props.dialogsPage.messagesData.map(message => <Message message={message.message} />)

    const newMessageElement = React.useRef()

    const sendMessage = () => {
        props.addMessage()
    }

    const onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateNewMessageText(text)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.messages}>
                    <textarea name="" id="" cols="30" rows="3" 
                    value={props.dialogsPage.newMessageText}
                    onChange={onMessageChange} 
                    ref={newMessageElement} />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs