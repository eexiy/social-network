import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElement = props.postsData.map(post => <Post message={post.post} likes={post.likes} />)

    const newPostElement = React.useRef()

    const addPost = () => {
        props.dispatch({ type: 'ADD-POST' })
    }

    const onPostChange = () => {
        debugger
        let text = newPostElement.current.value
        const action = { type: 'UPDATE-NEW-POST-TEXT', text: text }
        props.dispatch(action)
    }

    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="3"
                            value={props.newPostText}
                            onChange={onPostChange}
                            ref={newPostElement}></textarea>
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