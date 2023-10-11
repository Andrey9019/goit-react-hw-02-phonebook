import { Formik, Field, Form,ErrorMessage } from 'formik';
 import * as Yup from 'yup';

 const phonebookSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     number: Yup.string()
.matches(
      '[0-9]{3}-[0-9]{2}-[0-9]{2}',
      'Enter valid symbols format xxx-xxx-xx'
    )
     .required('Required'),
 });

export const Phonebook = ({onAdd}) => (
  <div>
    <h1>Phonebook</h1>
    <Formik
      initialValues={{
        firstName: '',
        number: '',
            }}

            validationSchema={phonebookSchema}
            
      onSubmit={ (values, action) => {
        // new Promise((r) => setTimeout(r, 500));
        //   alert(JSON.stringify(values, null, 2));
          console.log(values);
          onAdd(values)
          action.resetForm()
      }}>
      <Form>
        <label >Name
                <Field name="firstName" />
                <ErrorMessage name="firstName" />
        </label>
                
        <label >Number
                <Field type="tel" name="number" />
                <ErrorMessage name="number" />
        </label>
        
        <button type="submit">Add Coontact</button>
      </Form>
    </Formik>
  </div>
);