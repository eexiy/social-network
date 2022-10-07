import { getAuthData } from "./authReducer"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCSESS'

const initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
    console.log(promise);
}


export default appReducer;