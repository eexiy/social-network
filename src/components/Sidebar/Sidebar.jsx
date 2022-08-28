import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.side__bar}>
            <ul>
                <li> <a href='s' className={s.item}>Profile</a></li>
            </ul>
            <ul>
                <li><a href='s' className={s.item}>Messages</a></li>
            </ul>
            <ul>
                <li><a href='s' className={s.item}>News</a></li>
            </ul>
            <ul>
                <li><a href='s' className={s.item}>Music</a></li>
            </ul>
            <ul>
                <li><a href='s' className={s.item}>Settings</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;