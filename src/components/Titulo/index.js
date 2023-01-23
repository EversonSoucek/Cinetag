import React from 'react'
import styles from './Titulo.module.css'


export default function Titulo({ children }) {
    return (
        <div className={styles.texto}><h1>{children}</h1></div>
    )
}
