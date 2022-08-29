import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    const postsData = [
        { id: 1, post: 'Hi! how are you?', likes: 15 },
        { id: 2, post: 'It\'s my first post', likes: 8 }
    ]

    const postsElement = postsData.map(post => <Post message={post.post} likes={post.likes} />)

    return (
        <div className={s.content}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
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