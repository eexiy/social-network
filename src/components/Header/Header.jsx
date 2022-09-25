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
                            ? props.login
                            : <NavLink to={'/login'}>Login</NavLink>}

                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Header;