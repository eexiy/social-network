import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElement = props.postsData.map(post => <Post message={post.post} likes={post.likes} />)

    const newPostElement = React.useRef()

    const addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="3" ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;