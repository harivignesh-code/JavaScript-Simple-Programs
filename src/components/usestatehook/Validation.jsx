import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Validation = () => {

  const initialValues = {
    name: "",
    gmail: "",
    password: "",
    address: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Minimum 3 characters")
      .required("Name is required"),

    gmail: Yup.string()
      .email("Invalid Gmail format")
      .required("Gmail is required"),

    password: Yup.string()
      .min(5, "Minimum 5 letters")
      .required("Password is required"),

    address: Yup.string()
      .required("Address is required"),
  });

  const onSubmit = (values) => {
    alert("Form Submitted Successfully!");
    console.log(values);
  };

  return (
    <div style={{ width: "350px", margin: "auto", paddingTop: "50px" }}>
      <h2>Form</h2>

      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange }) => (
          <Form>

            <label>Name</label>
            <input
              placeholder="Enter Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}><ErrorMessage name="name" /></p>

            <label>Gmail</label>
            <input
              placeholder="Enter Gmail"
              name="gmail"
              value={values.gmail}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}><ErrorMessage name="gmail" /></p>

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}><ErrorMessage name="password" /></p>

            <label>Address</label>
            <input
              placeholder="Enter Address"
              name="address"
              value={values.address}
              onChange={handleChange}
            />
            <p style={{ color: "red" }}><ErrorMessage name="address" /></p>

            <button type="submit">Submit</button>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Validation;
