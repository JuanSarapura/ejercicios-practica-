import { Field, Form, Formik, ErrorMessage } from "formik";

function AppForm() {
  return (
    <Formik
      initialValues={{ message: "Hey there, i'am..." }}
      validate={(values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "The name is required";
        } else if (!values.email) {
          errors.email = "The email is required";
        } else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            values.email
          )
        ) {
          errors.email = "Email not valid";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        let url = "https://formspree.io/f/xvojoppp";
        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("email", values.email);
        formData.append("message", values.message);

        fetch(url, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }).then((response) => {
          setSubmitting(false);
          alert("Thanks for contact us");
        });
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="form">
          <div className="input">
            <label htmlFor="name">Name:</label>
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="p" />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email"></Field>
            <ErrorMessage name="email" component="p" />
          </div>
          <div className="input">
            <label htmlFor="message">Message:</label>
            <Field
              component="textarea"
              value={values.message}
              name="message"
            ></Field>
            <ErrorMessage name="email" component="p" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default AppForm;
