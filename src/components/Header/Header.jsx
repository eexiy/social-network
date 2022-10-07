import s from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <nav className={s.header__nav}>
                <div className={s.header__navContent}>
                    <img src="image.png" alt="logo" />
                    <div className={s.header__navAuth}>
                        {props.isAuth
                            ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                            : <NavLink to={'/login'}>Login</NavLink>}

                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;