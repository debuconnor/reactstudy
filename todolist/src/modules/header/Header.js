import React from 'react'
import Styles from '../../css/header.module.css'
import InputBox from './InputBox'

function Header({ refresh }) {
  return (
    <header>
      <p className={Styles.logo}>todolist</p>
      <p>Type text and press &lt;Enter&gt;</p>
      <InputBox refresh={refresh} />
      <p><br /><b>Click</b> : toggle<br /><b>Double Click</b> : delete</p>
    </header>
  )
}

export default Header