import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Logo-cinetag.png'
import styles from './Cabecalho.module.css'
import CabecalhoLink from 'components/CabecalhoLink'


export default function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
        <Link to='./'>
            <img src={logo} alt='Logo do cinetag'></img>
        </Link>
        <nav>
            <CabecalhoLink url='./'>Home</CabecalhoLink>
            <CabecalhoLink url='./'>Favoritos</CabecalhoLink>

        </nav>
    </header>
  )
}
