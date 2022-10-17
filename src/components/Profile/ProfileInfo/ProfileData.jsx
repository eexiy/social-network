import Contact from './Contact'
import s from './ProfileInfo.module.css'

const ProfileData = (props) => {
    return (
        <div className={s.profile__info}>
            {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}
            <ul>
                <li>Full name: <span>{props.profile.fullName}</span></li>
                <li>Looking for a job: <span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span></li>
                <li>
                    Looking for a job description: <span>{props.profile.lookingForAJobDescription}</span>
                </li>
                <li>About Me: {props.profile.aboutMe}</li>
            </ul>
            <div>
                Contacts: {
                    Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
                    })
                }
            </div>
        </div>
    )
}

export default ProfileData