import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Axios from "axios";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ values, errors, touched, status }) => {
  const { push } = useHistory();

  const [message, setMessage] = useState([]);

  //Submits ----
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(` http://localhost:5000/api/login`, values)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        setMessage([...message, values]);
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        push("/friends");
      })
      .catch(err => console.log(err.response))
      .finally();
  };

  // Checking Validations !! ----
    Yup.object().shape({
      username: Yup.string().min(3, `Name Too Short!`),
      password: Yup.string().required(`Password required`),
    });

  // Return STARTS HERE  - -------------
  return (
    <div>
      <h1>My Form</h1>
      <Formik
        initialValues={{ username: ``, password: `` }}
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