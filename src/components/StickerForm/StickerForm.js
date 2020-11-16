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

    const goBack = () => history.push('/');

    const onFormSubmit = (values) => {
        saveSticker(values);
        goBack();
    };

    const renderForm = (props) => {
        return (
            <Form>
                <div id='title' className='form-field'>
                    <label htmlFor='title'>Title</label>
                    <Field name='title'/>
                </div>
                <div id='description' className='form-field'>
                    <label htmlFor='description'>Description</label>
                    <Field className='form-description'
                           name='description'
                           maxlength='255'
                           as='textarea'/>
                </div>
                <div id='btn-group'>
                    <button type='submit'>Save</button>
                    <button type='button' onClick={goBack}>Cancel</button>
                </div>
            </Form>
        )
    };
    return (
        <div className='modal'>
            <div className='sticker-form'>
                <h3>Sticker Form</h3>
                <Formik
                    initialValues={currentSticker}
                    onSubmit={onFormSubmit}>
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
