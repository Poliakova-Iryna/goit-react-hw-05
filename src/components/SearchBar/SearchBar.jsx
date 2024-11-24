import { Field, Form, Formik } from "formik"
import s from './SearchBar.module.css';

const SearchBar = ({ handleSetQuery }) => {
    const handleSubmit = (values, options) => {
        handleSetQuery(values.query);
        options.resetForm();
    };

    const initialValues = {
        query: ''
    };

    return (
        <div className={s.container}>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    <Field name='query' placeholder='Search for a movie'></Field>
                    <button type='submit'>Search</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SearchBar; 