import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../container/auth/RegisterForm';


const Register = () => {
    return (
        <AuthTemplate>
            <RegisterForm />
        </AuthTemplate>
    );
};

export default Register;