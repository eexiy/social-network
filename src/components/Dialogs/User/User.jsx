import s from './User.module.css';
import { NavLink } from 'react-router-dom';



const User = (props) => {

    let path = '/messages/' + props.id

    return (
        <div className={s.user}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default User