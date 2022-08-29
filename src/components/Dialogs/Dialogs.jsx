import s from './Dialogs.module.css';
import Message from './Messages/Message';
import User from './Users/User';



const Dialogs = (props) => {

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

    const usersElement = usersData.map(user => <User name={user.name} id={user.id} />)
    const messagesElement = messagesData.map(message => <Message message={message.messages} />)

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