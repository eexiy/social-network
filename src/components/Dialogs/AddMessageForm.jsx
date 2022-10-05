import { Field, Form, Formik } from "formik";

const AddMessageForm = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values);
    }

    return (
        <Formik
            initialValues={{
                newMessageText: ""
            }}
            onSubmit={(values, { resetForm }) => {
                addNewMessage(values.newMessageText);
                resetForm({ values: '' });
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageText'}
                            as={'textarea'}
                            placeholder={'enter text'}
                        />
                    </div>

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}
export default AddMessageForm