import { Field, Form, Formik } from "formik";

const AddPostForm = (props) => {

    let addNewPost = (values) => {
        props.sendPost(values);
    }

    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            onSubmit={(values, { resetForm }) => {
                console.log(values.newPostText);
                addNewPost(values.newPostText);
                resetForm({ values: '' });
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newPostText'}
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
export default AddPostForm