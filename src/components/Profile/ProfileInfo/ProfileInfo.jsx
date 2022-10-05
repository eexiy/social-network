import Preloader from '../../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/ava.webp'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profile__header}>
                <img src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg" alt="" />
            </div>
            <div >
            <img className={s.profile__infoAva} src={props.profile.photos.large !== null
                ? props.profile.photos.large
                : userPhoto} alt="" />
            <ProfileStatus status={props.status} profile={props.profile} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo