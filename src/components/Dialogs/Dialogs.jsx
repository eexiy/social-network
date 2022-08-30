import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';



const Dialogs = (props) => {

    const usersElement = props.state.usersData.map(user => <User name={user.name} id={user.id} />)
    const messagesElement = props.state.messagesData.map(message => <Message message={message.message} />)

    const newMessageElement = React.useRef()

    const sendMessage = () => {
        let text = newMessageElement.current.value
        props.addMessage(text)
        newMessageElement.current.value = ''
    }

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
                <div className={s.messages}>
                    <textarea id="" cols="30" rows="3" ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs