import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';



const Dialogs = (props) => {

    let state = props.dialogsPage

    const usersElement = state.usersData.map(user => <User name={user.name} key={user.id} id={user.id} />)
    const messagesElement = state.messagesData.map(message => <Message key={message.id} message={message.message} />)

    const sendMessage = () => {
        props.sendMessage()
    }

    const onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }

    let navigate = useNavigate()

    useEffect(() => {
        if(!props.isAuth) {
            return navigate('/login')
        }
    })

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
                    onChange={onMessageChange} />
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs