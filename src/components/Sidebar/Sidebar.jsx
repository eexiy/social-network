import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className={s.side__bar}>
            <ul>
                <li> <NavLink to="/profile" className={s.item}>Profile</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/messages" className={s.item}>Messages</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/users" className={s.item}>Users</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/news" className={s.item}>News</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/music" className={s.item}>Music</NavLink></li>
            </ul>
            <ul>
                <li><NavLink to="/settings" className={s.item}>Settings</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;