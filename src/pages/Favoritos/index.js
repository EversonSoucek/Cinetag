import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import { useFavoritoContext } from 'context/Favoritos'
import React from 'react'
import styles from './Favoritos.module.css'

export default function Favoritos() {
  const { favorito } = useFavoritoContext()
  return (
    <>
      <Banner imagem='favorito' />
      <Titulo> Meus Favoritos</Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id}></Card>
        })}
      </section>
    </>
  )
} 
