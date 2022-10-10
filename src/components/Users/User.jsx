import s from './Users.module.css'
import userPhoto from '../../assets/images/ava.webp'
import { NavLink } from 'react-router-dom'

const User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.users__profile} key={user.id}>
            <div>
                <div>
                    <div className={s.users__logo}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="user avatar" />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { unfollow(user.id) }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => { follow(user.id) }}>Follow</button>}
                    </div>
                    <span>
                        <span>
                            <div> {user.name} </div>
                            <div> {user.status} </div>
                        </span>
                        <span>
                            <div> {"user.location.country"} </div>
                            <div> {"user.location.city"} </div>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default User;