import React from 'react'
import Logo from './Logo/Logo'
import { Explore } from './Explore/Explore'
import Button from './Button/Button'
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <div className={styles.nav}>
        <Logo/>
        <Explore/>
        <Button/>
    </div>
  )
}

export default Nav