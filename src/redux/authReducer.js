import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })

export const getAuthData = () => {
    return (dispatch) => {
        return authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login, } = data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
    }
}
export const login = (email, password, rememberMe, setFieldValue) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthData())    
            } else {
                setFieldValue(data.messages)
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
    
            }
        })
    }
}

export default authReducer;