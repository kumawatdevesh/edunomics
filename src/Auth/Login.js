import React, {useState} from 'react';
import styles from './Login.module.css';
import { NavLink, Redirect, withRouter } from 'react-router-dom';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();

        if(email === 'admin@gmail.com' && password === 'admin') {
            props.history.push('/dashboard');
        }
    };

    return (
        <div>
            <form className={styles.signup__form} onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={e => setEmail(e.target.value)} />
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={e => setPassword(e.target.value)} />

                <input type="submit" value="Sign Up"  />
            </form>
        </div>
    )
}

export default withRouter(Login);
