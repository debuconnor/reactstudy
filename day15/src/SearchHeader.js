import React from 'react';
import styles from './searchHeader.module.css'

function SearchHeader() {
  return <header className={styles.header}>
      <div>
          <img className={styles.logo}/>
          <h1>Youtube</h1>
      </div>
      <input className={styles.search} type="search" placeholder="Search..." />
      <button className={styles.button}>GO</button>
  </header>;
}

export default SearchHeader;
