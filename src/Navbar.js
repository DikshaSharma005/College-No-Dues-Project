import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['nav-container']}>
      <div className={styles.wrapper}>
        <nav>
          <ul className={styles['nav-items']}>
            <li>
              <a href="/"> HOME</a>
              
            </li>
            <li>
              <a href="https://gndec.ac.in/?q=node/2"> ABOUT US</a>
            </li>
            <li>
              <a href="https://www.gndec.ac.in/">COLLEGE WEBSITE</a>
            </li>
            <li>
              <a href="https://gndec.ac.in/?q=node/53"> CONTACT US</a>
            </li>
            
            <li>
              <a href="/"> LOGOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;