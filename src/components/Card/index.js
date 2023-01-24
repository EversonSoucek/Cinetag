import { useFavoritoContext } from 'context/Favoritos'
import React from 'react'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'

export default function Card({id,titulo,capa}) {
  const {favorito,adicionarFavorito} = useFavoritoContext()
  return (
    <div className={styles.container}>
        <img src={capa} alt={titulo} className={styles.capa}></img>
        <h2>{titulo}</h2>
        <img src={iconeFavoritar} alt='favoritar filme' className={styles.favoritar} onClick={() => {
          adicionarFavorito({id,titulo,capa})
        }}></img>
        </div>
  )
}
