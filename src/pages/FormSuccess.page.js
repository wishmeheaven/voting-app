import React from 'react';
import Wrapper from '../styles/styled/FormLogin.page.styled'

const FormSuccess = () => {
    return (
        <Wrapper>
        <div className='form-content-right'>
            <h1 className='form-success'>Thank you for fulfilling your duty!</h1>
            <img className='form-img-2' src='../assets/img/img-3.svg' alt="spaceship"/>
        </div>
        </Wrapper>
    );
};

export default FormSuccess;