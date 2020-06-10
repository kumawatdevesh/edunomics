import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Session.module.css';

function Session() {
    return (
        <div>
            <div className={styles.top}>
                <h1>welcome to Edunomics</h1>
                <button className={styles.logout}>My Account</button>
            </div>
            <div className={styles.parent}>
                <div className={styles.drawer}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/sessions">Session</NavLink>
                    <NavLink to="/">Downloads</NavLink>
                    <NavLink to="/">Settings</NavLink>
                    <NavLink to="/">About</NavLink>
                </div>
                <div className={styles.right}>
                    <div className={styles.right__top}>
                        <NavLink to="/"  style={{color: 'white', textDecoration: 'none'}}>Choose Class</NavLink>
                    </div>
                    <div className={styles.right__bottom}>
                        <div className={styles.cards}>All Interactive Session</div>
                            <div className={styles.cards}>Pracice Question</div>
                            <div className={styles.cards}>DownLoads</div>
                            <div className={styles.cards}>Ask Questions</div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Session;
