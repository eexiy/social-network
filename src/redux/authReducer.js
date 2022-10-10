import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

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

export const getAuthData = () => async (dispatch) => {
    let response = await authAPI.auth()

    if (response.data.resultCode === 0) {
        let { id, email, login, } = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}
export const login = (email, password, rememberMe,) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    }
}

export const logout = () => async (dispatch) => {
        let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
}

export default authReducer;