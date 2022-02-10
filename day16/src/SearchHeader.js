import React,{useRef} from 'react';
import styles from './searchHeader.module.css'

function SearchHeader({onSearch}) {
 const inputRef=useRef() 
 
const handleSearch = () => {
  const value=inputRef.current.value;
  onSearch(value)
};

  const onClick = () => {
    handleSearch()
  };
  const onKeyPress = (e) => {
  if(e.key==='Enter'){
    handleSearch()
  }    
   
  };
  
  return <header>
    <div className={styles.header}>
      <img src='/asset/logo.svg'className={styles.logo}/ > 
      <h1>YouTube</h1>
    </div>
    <input className={styles.search} type="search" placeholder='Search...'  onKeyPress={onKeyPress} ref={inputRef}/>
    <button className={styles.button}><img src="/asset/search.png" onClick={onClick}/></button>

  </header >;
}

export default SearchHeader;
