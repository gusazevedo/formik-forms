import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Schema from './schema';
import "./App.css";

function App() {

  function onSubmit(values, actions) {
    console.log("SUBMIT", values);
  }

  return (
    <div className="App">
      <Formik
        validationSchema={Schema}
        onSubmit={onSubmit}
        initialValues={{
          name: "",
          email: "",
        }}
        render={({ values, errors, touched }) => (
          <Form>
            <div>
              <label>Name: </label>
              <Field type="text" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label>Email: </label>
              <Field type="text" name="email" />
              <ErrorMessage name="email" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
