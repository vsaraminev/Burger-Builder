import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = (props) => {
    return (
        <div className={styles.Logo}>
            <img src={burgerLogo} alt="MyBurgerLogo" />
        </div>
    );
}

export default Logo;