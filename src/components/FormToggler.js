import React from 'react';
import './FormToggler.css';

export const FormToggler = ({ isSigninForm, toggleSetter }) => {
    return (
        <div style={{ display: 'flex' }}>
            <p>
                {
                    isSigninForm ? 'Don\'t have an account?' : 'Already have an account?'
                }
            </p>
            <button className='button' onClick={() => toggleSetter(!isSigninForm)}>
                {isSigninForm ? 'Create An Account' : 'Sign In Here'}
            </button>
        </div>
    )
};
