import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, savePhoto, updateStatus } from '../../redux/profileReducer'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { compose } from 'redux';
import { Navigate } from "react-router-dom";

class ProfileContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowMyProfile: true
        }
    }

    // refreshProfile = () => {
    //     let userId = this.props.match.params.userId
    //     if (!userId) {
    //         this.props.match.params.userId = 6724
    //     }
    //     this.props.getUserProfile(userId)
    //     console.log(this.props.getUserProfile(userId))
    //     this.props.getStatus(userId)
    // }

    // componentDidMount() {
    //     this.refreshProfile()
    // }

    componentDidMount() {

        let userIdFromPath = +this.props.router.params.userId;
        let authorizedUserId = this.props.authorizedUserId;

        if (userIdFromPath) {
            this.props.getUserProfile(userIdFromPath);
            this.props.getStatus(userIdFromPath);

        } else {

            if (this.props.isAuth) {
                this.props.getUserProfile(authorizedUserId);
                this.props.getStatus(authorizedUserId);
            }
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        let userIdFromPath = +this.props.router.params.userId;
        let authorizedUserId = this.props.authorizedUserId;
        let isShowMyProfile = this.state.isShowMyProfile;

        if (isShowMyProfile) {

            if (userIdFromPath === authorizedUserId) {
                this.setState({ isShowMyProfile: false })
            }

            if (!userIdFromPath && this.props.isAuth) {
                this.props.getUserProfile(authorizedUserId);
                this.props.getStatus(authorizedUserId);
                this.setState({ isShowMyProfile: false })
            }
        }
    }

    render() {

        if (!this.props.isAuth && !this.props.router.params.userId) {
            return <Navigate to={'/login'} />
        }

        let userIdFromPath = +this.props.router.params.userId;
        let authorizedUserId = this.props.authorizedUserId;

        let isOwner = false;
        if (!userIdFromPath && this.props.isAuth) {
            isOwner = true;
        } else if (userIdFromPath === authorizedUserId) {
            isOwner = true;
        }

        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={isOwner}
                    savePhoto={this.props.savePhoto}
                />
            </div>
        )
    }

}

function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return <Component
            {...props}
            router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}



const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

const ProfileContainerCompose = compose(
    withRouter,
    connect(mapStateToProps,
        { getUserProfile, getStatus, updateStatus, savePhoto })
)(ProfileContainer)

export default ProfileContainerCompose;