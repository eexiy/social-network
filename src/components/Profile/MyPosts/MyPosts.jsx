import React from 'react';
import AddPostForm from './AddPostForm';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = React.memo(props => {

    const postsElement = props.postsData.map(post => <Post message={post.post} key={post.id} likes={post.likes} />)

    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <AddPostForm sendPost={props.sendPost} />
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
})

export default MyPosts;