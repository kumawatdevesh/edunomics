import React from 'react';
import styles from './DashBoards.module.css'
import { NavLink, withRouter } from 'react-router-dom';

function DashBoards(props) {

    const logout = () => {
        props.history.push('/');
    };

    return (
        <div>
            <header>
                <div className={styles.top}>
                    <h1>welcome to Edunomics</h1>
                    <button onClick={logout} className={styles.logout}>My Account</button>
                </div>
            </header>
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
                        <div className={styles.cards}>All Interactive Session</div>
                        <div className={styles.cards}>Pracice Question</div>
                        <div className={styles.cards}>DownLoads</div>
                        <div className={styles.cards}>Ask Questions</div>
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

export default withRouter(DashBoards);
