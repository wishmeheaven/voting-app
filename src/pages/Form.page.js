import React, { useState } from 'react';
import FormLogin from './FormLogin.page';
import FormSuccess from './FormSuccess.page';
import Wrapper from '../styles/styled/FormLogin.page.styled'


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <Wrapper>
            <div className='form-container'>
                <span className='close-btn'>×</span>
                <div className='form-content-left'>
                    <img className='form-img' src='../img/img-2.svg' alt='spaceship' />
                </div>
                {!isSubmitted ? (
                    <FormLogin submitForm={submitForm} />
                ) : (
                    <FormSuccess />
                )}
            </div>
            </Wrapper>
        </>
    );
};

export default Form;