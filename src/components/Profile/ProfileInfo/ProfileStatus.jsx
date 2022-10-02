// import Preloader from '../../../common/Preloader/Preloader'
// import s from './ProfileInfo.module.css'
// import userPhoto from '../../../assets/images/ava.webp'
import { useState } from 'react'

const ProfileStatus = (props) => {
    // return (
    //         <div className={s.profile__info}>
    //             <img className={s.profile__infoAva} src={profile.photos.large !== null
    //                 ? profile.photos.large
    //                 : userPhoto} alt="" />
    //             <div className={s.profile__infoContact}>
    //                 <ul>
    //                     <li>{profile.fullName}</li>
    //                     <li>{profile.aboutMe}</li>
    //                     <li>{profile.status}</li>
    //                     <li></li>
    //                     <li>Facebook: <a href="1"> {profile.contacts.facebook}</a></li>
    //                     <li>Website: <a href="1">{profile.contacts.website}</a></li>
    //                     <li>VKontakte: <a href="1">{profile.contacts.vk}</a></li>
    //                     <li>Instagram: <a href="1">{profile.contacts.instagram}</a></li>
    //                     <li>Twitter: <a href="1">{profile.contacts.twitter}</a></li>
    //                     <li>Youtube: <a href="1">{profile.contacts.youtube}</a></li>
    //                     <li>GitHub: <a href="1">{profile.contacts.github}</a></li>
    //                     <li>MainLink: <a href="1">{profile.contacts.mainLink}</a></li>
    //                     <li>Looking for a job: <a href="1">{profile.lookingForAJob}</a></li>
    //                     <li>Looking for a job description: <a href="1">{profile.lookingForAJobDescription}</a></li>
    //                 </ul>
    //             </div>
    //         </div>
    // )
    const [editMode, setEditMode] = useState(false)

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => { setEditMode(true) }}>{props.status}</span>
                </div>}
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={() => { setEditMode(false) }} value={props.status}></input>
                </div>}
        </div>
    )
}

export default ProfileStatus