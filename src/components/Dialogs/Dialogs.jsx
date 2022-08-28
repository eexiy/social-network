import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={`${s.user} ${s.active}`}>
                    <NavLink to='/messages/1'>Lily</NavLink>
                </div>
                <div className={s.user}>
                <NavLink to='/messages/2'>John</NavLink>
                </div>
                <div className={s.user}>
                <NavLink to='/messages/3'>Alex</NavLink>
                </div>
                <div className={s.user}>
                <NavLink to='/messages/4'>Sue</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi! How are you?</div>
                <div className={s.message}>I'm fine, and you?</div>
                <div className={s.message}>Good</div>
            </div>
        </div>
    )
}

export default Dialogs