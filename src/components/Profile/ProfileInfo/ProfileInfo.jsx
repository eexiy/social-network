import Preloader from '../../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

const ProfileInfo = ({profile}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.profile__header}>
                <img src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg" alt="" />
            </div>
            <div className={s.profile__info}>
                <img className={s.profile__infoAva} src={profile.photos.large} alt="" />
                <div className={s.profile__infoContact}>
                    <ul>
                        <li>{profile.fullName}</li>
                        <li>{profile.aboutMe}</li>
                        <li>Facebook: <a href="1"> {profile.contacts.facebook}</a></li>
                        <li>Website: <a href="1">{profile.contacts.website}</a></li>
                        <li>VKontakte: <a href="1">{profile.contacts.vk}</a></li>
                        <li>Instagram: <a href="1">{profile.contacts.instagram}</a></li>
                        <li>Twitter: <a href="1">{profile.contacts.twitter}</a></li>
                        <li>Youtube: <a href="1">{profile.contacts.youtube}</a></li>
                        <li>GitHub: <a href="1">{profile.contacts.github}</a></li>
                        <li>MainLink: <a href="1">{profile.contacts.mainLink}</a></li>
                        <li>Looking for a job: <a href="1">{profile.lookingForAJob}</a></li>
                        <li>Looking for a job description: <a href="1">{profile.lookingForAJobDescription}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo