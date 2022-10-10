import { ErrorMessage, Form, Formik } from "formik"
import { createField } from "../../common/Preloader/FormValidation/FormControls";
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
                onSubmit={(values, setFieldValue) => {
                    props.login(values.email, values.password, values.rememberMe)
                }}>
                {() => (
                    <Form>
                        {createField(validateEmail, 'text', 'email', 'e-mail')}
                        <ErrorMessage name="email" component="div" />
                        {createField(null, 'password', 'password', 'password')}
                        <ErrorMessage name="password" component="div" />
                        {createField(null, 'checkbox', 'rememberMe', null, 'Remember me')}
                        <button type='submit'>Log in</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}



export default LoginForm