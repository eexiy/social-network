import Preloader from '../../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profile__header}>
                <img src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg" alt="" />
            </div>
            <ProfileStatus status={'Peace your home!'} profile={props.profile}/>
        </div>
    )
}

export default ProfileInfo