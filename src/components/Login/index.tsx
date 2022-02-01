import { Formik, Form, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from "yup";

import BrokerProvider from '../../providers/broker';
import { setCookie } from '../../utils/cookies';

import { Container, LoginFormContainer, FormGroup, FormSubmitButton } from './styles';

interface IValues {
    identifier: string
    password: string
}

const Schema = Yup.object().shape({
    identifier: Yup.string().email("Provide a valid email").required("This field is required"),
    password: Yup.string().required("This field is required"),
});

const LoginPage: React.FC = () => {

    const history = useHistory();
    const initialValues: IValues = {identifier: "", password: ""};
    const [handleException, setHandleException] = useState<string | null>(null);

    const handleSubmitForm = async (values: IValues, { setSubmitting }: FormikHelpers<IValues>) => {
        setSubmitting(true);
        const { code, token, message } = await BrokerProvider.getToken(values);
        setSubmitting(false);

        if (code === "success") {
            setCookie("token", token || "");
            history.push("/login");
        } else {
            console.error(message);
            setHandleException(`${code}: Verify your credentials and try again.`);
        }

    }

    return <Container>
        <LoginFormContainer>
            <Formik initialValues={initialValues} onSubmit={handleSubmitForm} validationSchema={Schema}>
                {({values, errors, handleBlur, handleChange}) => {
                    return <Form>
                        {handleException && <p className="error">
                            {handleException}
                            </p>}
                        <FormGroup>
                            <label>Email</label>
                            <input
                                type="text"
                                name="identifier"
                                placeholder="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                />
                            {errors.identifier && 
                                <span className="error"> {errors.identifier} </span>}
                        </FormGroup>
                        <FormGroup>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                />
                            {errors.password && 
                                <span className="error"> {errors.password} </span>}
                        </FormGroup>
                        <FormSubmitButton type="submit">
                            Connect
                        </FormSubmitButton>
                    </Form>
                }}
            </Formik>
        </LoginFormContainer>
    </Container>
}

export default LoginPage;