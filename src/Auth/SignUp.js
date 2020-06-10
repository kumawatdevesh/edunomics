import React from 'react';
import styles from './SignUp.module.css';

function SignUp() {
    return (
        <div className={styles.row}>
            <h1>SignUp</h1>
            <form className={styles.signup__form}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
                
                <label htmlFor="email">Email</label>
                <input type="email" name="email" />
                
                <label htmlFor="password">Password</label>
                <input type="password" name="password" />
                
                <label htmlFor="number">Number</label>
                <input type="Number" name="number" />

                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}

export default SignUp;
