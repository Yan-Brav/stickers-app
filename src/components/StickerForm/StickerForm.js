import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useHistory, withRouter} from 'react-router-dom';
import './StickerForm.css'
import {connect} from 'react-redux';
import {saveSticker} from '../../store/actions/stickers';

const EMPTY_STICKER = {
    title: '',
    description: '',
    width: 200,
    height: 200,
    x: 0,
    y: 0
};

function StickerForm({currentSticker, saveSticker}) {

    let history = useHistory();

    const goBack = (e) => {
        if (e.target.className === 'modal' || e.target.className === 'cancel') {
            history.push('/')
        }
    };

    const onFormSubmit = (values) => {
        saveSticker(values);
        history.push('/')
    };

    const renderForm = (props) => {
        console.log(props);
        return (
            <Form>
                <div id='title' className='form-field'>
                    <label htmlFor='title'>Title: </label>
                    <Field name='title'/>
                </div>
                {props.errors.title && props.touched.title
                    ? <div className='errors'>{props.errors.title}</div>
                    : null}
                <div id='description' className='form-field'>
                    <label htmlFor='description'>Description: </label>
                    <Field className='form-description'
                           name='description'
                           as='textarea'/>
                </div>
                {props.errors.description && props.touched.description
                    ? <div className='errors'>{props.errors.description}</div>
                    : null}
                <div id='btn-group'>
                    <button type='submit'
                            disabled={!props.isValid}
                            className='btn-save'>Save</button>
                    <button type='button'
                            onClick={goBack}
                            className='cancel'>Cancel</button>
                </div>
            </Form>
        )
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.title)  {
            errors.title = 'Title is required';
        }
        if (values.description.length > 30) {
            errors.description = 'Description can not be more than 30'
        }
        return errors;
    };

    return (
        <div className='modal'
             onClick={goBack}>
            <div className='sticker-form'>
                <h3>Sticker Form</h3>
                <Formik
                    initialValues={currentSticker}
                    onSubmit={onFormSubmit}
                    validate={validateForm}>
                    {renderForm}
                </Formik>
            </div>
        </div>
    );
}

const mapStateToProps = ({stickersList}, {match: {params: {id}}}) => {
    const currentSticker = stickersList.find(sticker => sticker.id === id);
    return {
        currentSticker: currentSticker ? currentSticker : EMPTY_STICKER
    }
};

const mapDispatchToProps = {
    saveSticker
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StickerForm));
