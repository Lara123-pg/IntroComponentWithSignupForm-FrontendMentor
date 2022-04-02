import React, { useState } from 'react';

import '../scss/main.scss';

export function Form() {
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(null);
    const [inputName, setInputName] = useState(false);

    const [lastName, setLastName] = useState('');
    const [errorLastName, setErrorLastName] = useState(null);
    const [inputLastName, setInputLastName] = useState(false);

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(null);
    const [inputEmail, setInputEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(null);
    const [inputPassword, setInputPassword] = useState(false);    

    const validate = () => {
        let error = false;

        // First Name
        setErrorName(null);
        const regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

        if(name == '') {
            setErrorName('First Name cannot be empty');
            error = true;
            setInputName(true);

        } else if(!regexName.test(name)) {
            setErrorName('First Name was filled in incorrectly');
            error = true;
            setInputName(true);
        }

        // Last Name
        setErrorLastName(null);
        const regexLastName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

        if(lastName == '') {
            setErrorLastName('Last Name cannot be empty');
            error = true;
            setInputLastName(true);

        } else if(!regexLastName.test(lastName)) {
            setErrorLastName('Last Name was filled in incorrectly');
            error = true;
            setInputLastName(true);
        }

        // Email
        setErrorEmail(null);
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email == '') {
            setErrorEmail('Email Address cannot be empty');
            error = true;
            setInputEmail(true);

        } else if(!regexEmail.test(String(email).toLowerCase())) {
            setErrorEmail('Looks like this is not an email');
            error = true;
            setInputEmail(true);
        } 

        // Password
        setErrorPassword(null);
        const regexPassword = /^[a-z0-9_-]/;

        if(password == '') {
            setErrorPassword('Password cannot be empty');
            error = true;
            setInputPassword(true);

        } else if(!regexPassword.test(password)) {
            setErrorPassword('Password was filled in incorrectly');
            error = true;
            setInputPassword(true);
        }
        
        return !error;
    }

    return(
        <>
        <div className='container'>
            <aside>
                <strong>Learn to code by watching others</strong>
                <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </aside>

            <main>
                <div className='form'>
                    <div className='containerForm'><span>Try it free 7 days</span> then $20/mo. thereafter</div>

                    <form>
                        <input 
                            type = 'text' 
                            placeholder = 'First Name'
                            onChange = {event => {
                                setName(event.target.value);
                                setErrorName(null);
                                setInputName(false);
                            }}

                            value = {name}
                            className = {inputName ? 'errorInput' : ''}
                        />

                        <p className='error'>{errorName}</p>

                        <input 
                            type = 'text' 
                            placeholder = 'Last Name'
                            onChange = {event => {
                                setLastName(event.target.value);
                                setErrorLastName(null);
                                setInputLastName(false);
                            }}

                            value = {lastName}
                            className = {inputLastName ? 'errorInput' : ''}
                        />

                        <p className='error'>{errorLastName}</p>

                        <input 
                            type = 'text' 
                            placeholder = 'Email Address'
                            onChange = {event => {
                                setEmail(event.target.value);
                                setErrorEmail(null);
                                setInputEmail(false);
                            }}

                            value = {email}
                            className = {inputEmail ? 'errorInput' : ''}
                        />

                        <p className='error'>{errorEmail}</p>

                        <input 
                            type = 'password'
                            placeholder = 'Password'
                            onChange = {event => {
                                setPassword(event.target.value);
                                setErrorPassword(null);
                                setInputPassword(false);
                            }}
                            
                            value = {password}
                            className = {inputPassword ? 'errorInput' : ''}
                        />

                        <p className='error'>{errorPassword}</p>

                        <button type='button' onClick={() => validate()}>CLAIM YOUR FREE TRIAL</button>

                        <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
                    </form>
                </div>
            </main>
        </div>
        <footer style={{ marginTop: -20}}>
                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
                </p>
        </footer>
        </>
    );
}