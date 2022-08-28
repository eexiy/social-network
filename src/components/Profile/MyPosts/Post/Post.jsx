import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg" alt="" />
            {props.message}
            <div>
                <span>Like</span> {props.likes}
            </div>
        </div>
    );
}

export default Post;