import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;