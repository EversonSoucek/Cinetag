import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React from 'react'
import videos from 'json/db.json'
import styles from './Inicio.module.css'

export default function Inicio() {
    return (
        <>
            <Banner imagem='home' />
            <Titulo>Um lugar para guardar seus vídeos e filmes! </Titulo>
            <section className={styles.container}>{videos.map((video) => (<Card {...video} key={video.id}></Card>))}</section>
        </>


    )
}
