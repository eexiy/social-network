import s from './Users.module.css'
import userPhoto from '../../assets/images/ava.webp'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../api/api'

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div>
                {
                    pages.map(page => {
                        return <span className={props.currentPage === page && s.users__selectPage}
                            onClick={(e) => { console.log(props.onPageChange(page)) }}>{page}</span>
                    })
                }

            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div className={s.users__logo}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt="user avatar" />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    usersAPI.deleteUsers(user.id).then(response => {
                                        if (response.resultCode === 0) {
                                            props.unfollow(user.id)
                                        }
                                    })

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.postUsers(user.id).then(response => {
                                        if (response.resultCode === 0) {
                                            props.follow(user.id)
                                        }
                                    })
                                }}>Follow</button>}
                        </div>
                    </span>
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
                </div>)
            }
        </div>
    )
}

export default Users;