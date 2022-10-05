import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText))
        }
    }
}

const DialogsRedirectComponent = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.isAuth) return navigate('/login')
    })
    return <Dialogs {...props}  />
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsRedirectComponent)

export default DialogsContainer