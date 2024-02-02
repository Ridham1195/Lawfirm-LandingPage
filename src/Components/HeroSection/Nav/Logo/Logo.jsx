import React from 'react'
import {ReactComponent as LogoIcon} from "../../../../Assets/lOGO.svg"
import styles from "./Logo.module.css"

const Logo = () => {
  return (
    <div className={styles.logo}><LogoIcon/></div>
  )
}

export default Logo