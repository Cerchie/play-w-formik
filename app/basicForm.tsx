'use client'
import React from 'react';
import { Formik } from 'formik';
import { FormikErrors } from 'formik';



const BasicForm = () => (
  <div>
    <h1>Formik form</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors: FormikErrors<{[field: string]: any}> = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className='p-8'>
          Email:
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="p-4 m-6 w-64 bg-white shadow rounded "
          />
          Password:
          {errors.email && touched.email && errors.email}
          
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className="p-4 m-6 w-64 bg-white shadow rounded"
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default BasicForm;