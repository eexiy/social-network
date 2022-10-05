import React from 'react';
import AddPostForm from './AddPostForm';
import s from './MyPosts.module.css'
import Post from './Post/Post';



const MyPosts = (props) => {

    const postsElement = props.postsData.map(post => <Post message={post.post} key={post.id} likes={post.likes} />)


    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    {/* <div>
                        <textarea name="" id="" cols="30" rows="3"
                            value={props.newPostText}
                            onChange={onPostChange}
                            ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div> */}
                    <AddPostForm sendPost={props.sendPost}/>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;