import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


class Profile extends React.Component {
    render() {
        return (
            <div>
                <ProfileInfo
                    {...this.props}
                />
                <MyPostsContainer
                />
            </div>
        );
    }
}


export default Profile;