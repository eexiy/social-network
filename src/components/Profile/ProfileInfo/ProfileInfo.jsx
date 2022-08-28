import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.profile__header}>
                <img src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg" alt="" />
            </div>
            <div className={s.profile__info}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo