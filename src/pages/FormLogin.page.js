import React from 'react';
import validate from './validateInfoUtil';
import useForm from './useFormUtil';
import Wrapper from '../styles/styled/FormLogin.page.styled'


const FormLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    return (
        <Wrapper>
            <div className='form-content-right'>
                <form onSubmit={handleSubmit} className='form' noValidate>
                    <h1>
                        Please log in to vote
                    </h1>
                    <div className='form-inputs'>
                        <label className='form-label'>Full Name</label>
                        <input
                            className='form-input'
                            type='text'
                            inputType='fullName'
                            placeholder='Enter your fullName'
                            value={values.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <p>{errors.fullName}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Email</label>
                        <input
                            className='form-input'
                            type='email'
                            inputType='email'
                            placeholder='Enter your email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Password</label>
                        <input
                            className='form-input'
                            type='password'
                            inputType='password'
                            placeholder='Enter your password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Confirm Password</label>
                        <input
                            className='form-input'
                            type='password'
                            inputType='password2'
                            placeholder='Confirm your password'
                            value={values.password2}
                            onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button className='form-input-btn' type='submit'>
                        Log In
                    </button>
                    <span className='form-input-login'>
                        Admin? Log in<a href='/'>here</a>
                    </span>
                </form>
            </div>
        </Wrapper>
    );
};

export default FormLogin;