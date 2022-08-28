import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.users}>
                <div className={`${s.user} ${s.active}`}>Lily</div>
                <div className={s.user}>John</div>
                <div className={s.user}>Alex</div>
                <div className={s.user}>Sue</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi! How are you?</div>
                <div className={s.message}>I'm fine, and you?</div>
                <div className={s.message}>Good</div>
            </div>
        </div>
    )
}

export default Dialogs