import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
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
                    <Post message="Hi! how are you?" likes='15' />
                    <Post message="It's my first post" likes='8' />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;