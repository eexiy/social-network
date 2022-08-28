import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {

    let path = '/messages/' + props.id

    return (
        <div className={`${s.user} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <User name='Lily' id='1' />
                <User name='John' id='2' />
                <User name='Alex' id='3' />
                <User name='Sue' id='4' />
            </div>
            <div className={s.messages}>
                <Message message='Hi! How are you?' />
                <Message message='I`m fine, and you?' />
                <Message message='Good' />
            </div>
        </div>
    )
}

export default Dialogs