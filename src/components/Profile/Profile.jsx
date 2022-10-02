// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

        // const navigate = useNavigate()
        // useEffect(() => {
        //     if(props.isAuth === false) return navigate('/login')
        // })
    
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;