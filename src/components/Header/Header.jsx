import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="image.png" alt="logo" />
        </header>
    );
}

export default Header;