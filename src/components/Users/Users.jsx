import s from './Users.module.css'
import userPhoto from '../../assets/images/ava.webp'
import { Navigate, NavLink } from 'react-router-dom'

const Users = (props) => {
    if (!props.isAuth) return <Navigate to='/profile/6724' />
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.users__num}>
                {
                    pages.map(page => {
                        return <span className={props.currentPage === page && s.users__selectPage}
                            onClick={(e) => { props.onPageChange(page) }}>{page}</span>
                    })
                }

            </div>
            {
                props.users.map(user => <div className={s.users__profile} key={user.id}>
                    <div>
                        <div>
                            <div className={s.users__logo}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="user avatar" />
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => { props.follow(user.id) }}>Follow</button>}
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

                </div>)
            }
        </div>
    )
}

export default Users;