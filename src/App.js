import React from 'react'
import {Country} from './components/Country/Country';
import styles from './App.module.css';


function App() {
  const style = {
    color: 'cyan',
    fontSize: 35,
    fontFamily: 'Ubuntu'
  }

  return (
    <>
    <h1  style={style} className={styles.container} > Covid Tracking App By Imran Kareem</h1>
    <div className={styles.container}>
      <Country />
      
    </div>
    </>
  );
};


export default App;
