import React from 'react'
import styles from "./SubscribeNewsLetter.module.css"

const SubscribeNewsLetter = () => {
  return (
    <section className={styles.sec}>
      <div className={styles.container}>
        <div className={styles.content-1}>
          <h1>Subscribe Our Newsletter</h1>
        </div>
        <div className={styles.content-2}>
          <input type="text" placeholder="     Name:" className={styles.input-1} />
          <input type="email" placeholder="   Enter your Email:" className={styles.input-2} />
          <button className={styles.send}>SEND</button>
        </div>
      </div>
    </section>
  )
}

export default SubscribeNewsLetter