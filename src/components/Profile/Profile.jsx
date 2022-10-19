import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                status={props.status}
                isOwner={props.isOwner}
                updateStatus={props.updateStatus}
                saveProfileInfo={props.saveProfileInfo}
                savePhoto={props.savePhoto} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;