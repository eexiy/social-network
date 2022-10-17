import Preloader from '../../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
import userPhoto from '../../../assets/images/ava.webp'
import ProfileData from './ProfileData'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'

const ProfileInfo = (props) => {


    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.profile__header}>
                <img src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg" alt="" />
            </div>
            <div >
                <img className={s.profile__infoAva} src={props.profile.photos.large || userPhoto} alt="" />
                <div className={s.profile__infoInput}></div>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected} />}
                {editMode
                    ? <ProfileDataForm
                        setEditMode={setEditMode}
                        saveProfileInfo={props.saveProfileInfo}
                        initialValues={props.profile}
                        profile={props.profile}
                    />
                    : <ProfileData
                        activateEditMode={() => setEditMode(true)}
                        isOwner={props.isOwner}
                        profile={props.profile}
                    />}
                <ProfileStatus
                    status={props.status}
                    profile={props.profile}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}


export default ProfileInfo