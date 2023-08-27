import { Formik, Form, Field, ErrorMessage } from "formik";

export default function NotesForm() {
  return (
    <Formik
      initialValues={{ title: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.title) {
          errors.title = "THE TITLE IS REQUIRED";
        } else if (!values.message) {
          errors.message = "THE MESSAGE IS REQUIRED";
        }
        return errors;
      }}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div>
            <p className="heading">Add a note:</p>

            <div className="inputContainer">
              <label htmlFor="title">Title:</label>
              <Field className="inputField" type="text" name="title" />
              <ErrorMessage className="error" name="title" component="div" />
            </div>
            <div className="inputContainer">
              <label htmlFor="message">Type a note:</label>
              <Field className="inputField" type="text" name="message" />
              <ErrorMessage className="error" name="message" component="div" />
            </div>
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Note added!" : "Save note"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
