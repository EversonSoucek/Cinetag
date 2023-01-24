import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React from 'react'
import styles from './Favoritos.module.css'
import videos from 'json/db.json'

export default function Favoritos() {
  return (
    <>
      <Banner imagem='favorito' />
      <Titulo> Meus Favoritos</Titulo>
      <section className={styles.container}>{videos.map((video) => (<Card {...video} key={video.id}></Card>))}</section>
    </>
  )
} 
