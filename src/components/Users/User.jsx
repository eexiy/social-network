import s from './Users.module.css'
import userPhoto from '../../assets/images/avaLogo.webp'
import { NavLink } from 'react-router-dom'

const User = ({ user, followingInProgress, unfollow, follow }) => {
    return (
        <div className={s.user__profile} key={user.id}>
            <div className={s.user__logo}>
                <NavLink to={`/profile/${user.id}`}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="user avatar" />
                </NavLink>
            </div>
            <h4 className={s.user__profileName}> {user.name} </h4>
            <div className={s.user__profileBtn}>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>Follow</button>}
            </div>
        </div>
    )
}
export default User;