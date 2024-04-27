import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';


const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span>Too Short!</span>)
    .max(50, <span>Too Long!</span>)
    .required(<span>Required</span>),
  number: Yup.number().required(<span>Required</span>),
});

const initialValues = {
  name: '',
  number: ''
};

export default function ContactForm({ handleAddContact }) {
  const nameID = useId();
  const numberID = useId();

  const hanndleSubmit = (values, actions) => {
    handleAddContact({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={hanndleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameID}>Name</label>
          <Field type="text" name="name" id={nameID} />
          <ErrorMessage name="name" as="span" />
        </div>
        <div>
          <label htmlFor="nuberID">Number</label>
          <Field type="number" name="number" id={numberID} />
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
