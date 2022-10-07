import { ErrorMessage, Field, Form, Formik } from "formik"
import loginFormSchema from "../../common/Preloader/FormValidation/LoginFormSchema"

const validateEmail = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

const LoginForm = (props) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "", rememberMe: false }}
                validationSchema={loginFormSchema}
                onSubmit={(values,  setFieldValue) => {
                    props.login(values.email, values.password, values.rememberMe)
                    console.log(values)
                }}>
                {() => (
                    <Form>
                        <div>
                            <Field validate={validateEmail} type={'text'} name={'email'} placeholder={'e-mail'} />
                        </div>
                        <ErrorMessage name="email" component="div" />

                        <div>
                            <Field type={'password'} name={'password'} placeholder={'password'} />
                        </div>
                        <ErrorMessage name="password" component="div" />
                        <div>
                            <Field type={'checkbox'} name={'rememberMe'} />
                            <label htmlFor={'rememberMe'}> Remember me </label>
                        </div>
                        <button type='submit'>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



export default LoginForm