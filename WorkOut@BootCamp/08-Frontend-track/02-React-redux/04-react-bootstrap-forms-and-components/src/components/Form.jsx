import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';

const MyForm = () => {
    return (
        <Container>
            <Row className="justify-content-md-center my-4 p-2 ">
                <Col md="6">
                    <h2 className="mb-4">Contact Form</h2>
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={Yup.object({
                            name: Yup.string().max(50, 'Must be 50 characters or less').required('Please enter your first name'),
                            email: Yup.string().email('Invalid email address').required('email field is required'),
                            message: Yup.string().required('Required').max(500, 'Must be 500 characters or less'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label"> Name </label>
                                    <Field type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label"> Email </label>
                                    <Field type="email" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div"className="text-danger" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <Field as="textarea" name="message" className="form-control" rows="5" />
                                    <ErrorMessage name="message" component="div" className="text-danger" />
                                </div>
                                <Button variant="primary" type="submit" disabled={isSubmitting}>Submit</Button>
                            </Form>
                        )}
                    </Formik>
                </Col>
            </Row>
        </Container>
    );
};

export default MyForm;
