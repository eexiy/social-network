import s from './Dialogs.module.css';
import Message from './Message/Message';
import User from './User/User';



const Dialogs = (props) => {

    const usersElement = props.state.usersData.map(user => <User name={user.name} id={user.id} />)
    const messagesElement = props.state.messagesData.map(message => <Message message={message.messages} />)

    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                {usersElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs