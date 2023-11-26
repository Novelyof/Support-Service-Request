import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.body}>
      <div className={styles.pageContainer}>
        <div className={styles.loginContainer}>
          <div className={styles.loginForm}>
            <h1 className={styles.welcomeText}>
              WELCOME BACK <br />
              TO AMANDA <br />
              <span className={styles.solutionText}>#The Best Solution For You</span>
            </h1>
            <Link href="/home">
              <button className={styles.button} type="submit">SSO</button>
            </Link>
            <div className={styles.imageColumn}>
              <Image
                src="/Login1.png"
                alt="Your Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
