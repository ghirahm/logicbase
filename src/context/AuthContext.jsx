import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [identifier, setIdentifier] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [isLogin, setIsLogin] = useState(() => {
        return localStorage.getItem('token') ? true : false;
    });

    const [isRegister, setIsRegister] = useState(false);

    const { handleSubmit } = useForm();

    const onSubmitLogin = async () => {
        setIsLoading(true);

        const form = new FormData();

        form.append('identifier', identifier);
        form.append('password', password);

        const value = Object.fromEntries(form.entries());

        await axios
            .post(`${process.env.REACT_APP_API_URL}api/auth/local`, value,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then((response) => {
                localStorage.setItem('token', response.data.jwt);
                setIsLogin(true);
            })
            .catch((error) => {
                setIsError('Username or Email or Password Invalid');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const onSubmitRegister = async () => {
        setIsLoading(true);

        const form = new FormData();
        form.append('username', username);
        form.append('email', email);
        form.append('password', password);

        const value = Object.fromEntries(form.entries());

        await axios
            .post(`${process.env.REACT_APP_API_URL}api/auth/local/register`, value,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            .then((response) => {
                setIsRegister(true);
            })
            .catch((error) => {
                setIsError('Register Invalid');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <AuthContext.Provider value={{ identifier, setIdentifier, username, setUsername, email, setEmail, password, setPassword, isLoading, setIsLoading, isError, setIsError, handleSubmit, onSubmitLogin, onSubmitRegister, isLogin, setIsLogin, isRegister, setIsRegister }} >
            {children}
        </AuthContext.Provider>
    )

}