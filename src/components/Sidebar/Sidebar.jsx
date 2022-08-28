import s from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={s.side__bar}>
            <ul>
                <li> <a href="/profile" className={s.item}>Profile</a></li>
            </ul>
            <ul>
                <li><a href="/messages" className={s.item}>Messages</a></li>
            </ul>
            <ul>
                <li><a href="/news" className={s.item}>News</a></li>
            </ul>
            <ul>
                <li><a href="/music" className={s.item}>Music</a></li>
            </ul>
            <ul>
                <li><a href="/settings" className={s.item}>Settings</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;