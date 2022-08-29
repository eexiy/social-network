import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    const postsElement = props.postsData.map(post => <Post message={post.post} likes={post.likes} />)

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