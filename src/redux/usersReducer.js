const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const initialState = {
    users: [
        {
            id: 1, photoUrl: 'https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg',
            followed: true, fullName: 'Mark', status: 'i`m not a girlfriend', location: { country: 'THE USA', city: 'Los Angeles' }
        },
        {
            id: 2, photoUrl: 'https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg',
            followed: true, fullName: 'John', status: 'Peace your home', location: { country: 'Ukraine', city: 'Kiev' }
        },
        {
            id: 3, photoUrl: 'https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg',
            followed: true, fullName: 'Lily', status: 'Hello everyone', location: { country: 'Russia', city: 'Moscow' }
        },
        {
            id: 4, photoUrl: 'https://www.kibrispdr.org/data/999/avatar-logo-template-1.jpg',
            followed: false, fullName: 'Alex', status: 'Im a boss', location: { country: 'THE USA', city: 'New York' }
        },
    ]
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: { ...state.users, ...action.users }
            }
        default:
            return state
    }
}

// Profile page
export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


export default usersReducer;