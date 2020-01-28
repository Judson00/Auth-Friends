import React, { useState } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Axios from "axios";

const Login = ({ values, errors, touched, status }) => {
  const [message, setMessage] = useState([]);

  //Submits ----
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(` http://localhost:5000/api/login`, values)
      .then(res => {
        setMessage([...message, values]);
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
      })
      .catch(err => console.log(err.response))
      .finally();
  };
  // Checking Validations !! ----
  const SignupSchema = () =>
    Yup.object().shape({
      name: Yup.string().min(3, `Name Too Short!`),
      email: Yup.string()
        .email("Invalid email")
        .required("Email Required"),
      password: Yup.string().required(`Password required`),
      terms: Yup.bool()
        .test(
          "consent",
          "You have to agree with our Terms and Conditions!",
          value => value === true
        )
        .required(`You have to agree with Terms of Service!`)
    });
  // Return STARTS HERE  - -------------
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ username: ``, password: `` }}
        validationSchema={SignupSchema}
        // validate={validate}
        onSubmit={handleSubmit}>
        {({ values }) => {
          return (
            <Form className='formbody'>
              <Field
                className='formFields'
                name='username'
                type='text'
                placeholder='name'
              />
              {console.log(values, "values")}
              <ErrorMessage name='name' component='div' className='red' />
              <Field
                className='formFields'
                name='password'
                type='password'
                placeholder='Password'
              />
              <ErrorMessage name='password' component='div' className='red' />
              &nbsp;
              <input type='submit' />
            </Form>
          );
        }}
      </Formik>
      {/* Map starts here !!!!! */}
      <div>
        {message.map(e => (
          <div>
            <p>{e.name}</p>
            <p>{e.email}</p>
            <p>{e.terms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Login;