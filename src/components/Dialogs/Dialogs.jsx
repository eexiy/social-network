import AddMessageForm from './AddMessageForm';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';



const Dialogs = (props) => {

    let state = props.dialogsPage

    const usersElement = state.usersData.map(user => <User name={user.name} key={user.id} id={user.id} />)
    const messagesElement = state.messagesData.map(message => <Message key={message.id} message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <AddMessageForm sendMessage={props.sendMessage} />
        </div>
    )
}

export default Dialogs