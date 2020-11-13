import React from 'react';
import {Formik} from "formik";
import './StickerForm.css'

function StickerForm(props) {

    const onFormSubmit = (values) => {
        console.log(values);
    };

    const renderForm = (props) => {
        console.log(props);
        return (
            <form onSubmit={props.handleSubmit}>
                <h3>Sticker Form</h3>
                <div id='title' className='form-field'>
                    <label htmlFor='title'>Title</label>
                    <input type='text'
                           name='title'
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           value={props.values.title}/>
                </div>
                <div id='description' className='form-field'>
                    <label htmlFor='description'>Description</label>
                    <input type='textarea'
                           name='description'
                           onChange={props.handleChange}
                           onBlur={props.handleBlur}
                           value={props.values.description}/>
                </div>
                <div id='btn-group'>
                    <button type='submit'>Save</button>
                    <button type='button'>Cancel</button>
                </div>
            </form>
        )
    };
    return (
        <div className='modal'>
            <div className='sticker-form'>
                <Formik
                    initialValues={{title: '', description: ''}}
                    onSubmit={onFormSubmit}>
                    {
                        renderForm
                    }
                </Formik>
            </div>
        </div>
    );
}

export default StickerForm;
