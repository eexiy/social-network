import { ErrorMessage, Field, Form, Formik } from 'formik'
import s from './ProfileInfo.module.css'




const ProfileDataForm = (props) => {

    const { fullName = '', lookingForAJob = false, lookingForAJobDescription = '', aboutMe = '',
        contacts = {
            facebook: null,
            instagram: null,
            twitter: null,
            vk: null,
            website: null,
            youtube: null,
            github: null,
            mainLink: null,
        } } = props.initialValues

    return (
        <Formik enableReinitialize={true}
            initialValues={{ fullName, lookingForAJob, lookingForAJobDescription, aboutMe, contacts }}
            onSubmit={(values) => {
                props.saveProfileInfo(values)
                props.setEditMode(false)
            }}
        >
            {() => (
                <Form>
                    <button type='submit'>Save</button>
                    <div>
                        <Field
                            name={'fullName'}
                            type={'text'}
                            placeholder={'Full name'}
                        />
                    </div>
                    <div>
                        <Field
                            name={'lookingForAJob'}
                            type={'checkbox'}
                            id='lookingForAJob' />
                        <label htmlFor={'lookingForAJob'}>
                            <b> Looking for a job</b> </label>
                    </div>
                    <div>
                        <Field
                            name={'lookingForAJobDescription'}
                            as={'textarea'}
                            placeholder={'My professional skills'}
                        />
                    </div>
                    <div>
                        <Field
                            name={'aboutMe'}
                            as={'textarea'}
                            placeholder={'About me'}
                        />
                    </div>
                    <div>
                        Contacts: {
                            Object.keys(props.profile.contacts).map(key => {
                                return <div key={key} className={s.contacts}>
                                    <div>{key}</div>
                                    <Field
                                        name={`contacts.${key}`}
                                        placeholder={key}
                                    />
                                    <ErrorMessage name={`contacts.${key}`} component="div" />
                                </div>
                            })
                        }
                    </div>
                </Form>
            )}
        </Formik >
    )
}

export default ProfileDataForm