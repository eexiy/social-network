import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg" alt="" />
            post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;