import React from 'react';
import {Formik} from "formik";
import {useHistory} from "react-router-dom";
import './StickerForm.css'
import {connect} from "react-redux";
import {addSticker} from "../../store/actions/stickers";

function StickerForm({stickersList, addSticker}) {

    let history = useHistory();

    const goBack = () => history.push('/');

    const onFormSubmit = (values) => {
        addSticker(values);
        goBack();
    };

    const renderForm = (props) => {
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
                           value={props.values.description}/>
                </div>
                <div id='btn-group'>
                    <button type='submit'>Save</button>
                    <button type='button' onClick={goBack}>Cancel</button>
                </div>
            </form>
        )
    };
    return (
        <div className='modal'>
            <div className='sticker-form'>
                <Formik
                    initialValues={{title: '',
                        description: '',
                        width:200,
                        height: 200,
                        x: 0,
                        y: 0}}
                    onSubmit={onFormSubmit}>
                    {
                        renderForm
                    }
                </Formik>
            </div>
        </div>
    );
}

const mapStateToProps = ({stickersList}, props) => {
    return {
        stickersList
    }
};

const mapDispatchToProps = {
    addSticker
};

export default connect(mapStateToProps, mapDispatchToProps)(StickerForm);
