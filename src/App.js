import React from "react";
import { Formik, Field, Form } from "formik";
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
              {errors.name && touched.name && 
                <span>{errors.name}</span>
              }
            </div>
            <div>
              <label>Email: </label>
              <Field type="text" name="email" />
              {errors.email && touched.email && 
                <span>{errors.email}</span>
              }
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}
      />
    </div>
  );
}

export default App;
