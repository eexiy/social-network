import s from './ProfileInfo.module.css'

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div className={s.profile__contact} >
            <ul>
                <li>{contactTitle}: <span>{contactValue}</span></li>
            </ul>
        </div>
    )
}

export default Contact