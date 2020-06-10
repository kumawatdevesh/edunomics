import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import Login from '../Auth/Login';
import styles from './Home.module.css';

function Home() {

    const [loginMode, setLoginMode] = useState(false);

    const loginModeHandler = () => {
        setLoginMode(prevState => !prevState);
    };

    return (
        <div>
        <header>
        <div className={styles.top__bar}>
          <div className={styles.hamburger__icon}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.bottom__bar}>
          <div className={styles.avatar}>      
            <div className={styles.login__form}>
                <Login />
            </div>
            <div className={styles.avatar__links}>
              <NavLink to="/">Login</NavLink>
              <NavLink to="/signup" onClick={loginModeHandler}>SignUp</NavLink>
            </div>
            <div className={styles.avatar__content}>
              <h1>What Do You Want To Learn Today</h1>
              <p>whatever your style, travel your way</p>
            </div>
          </div>
          <div className={styles.content}>
            <h1>Whatever your style, travel your way</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </header>
        </div>
    )
}

export default Home;
