import Banner from 'components/Banner'
import Card from 'components/Card'
import Titulo from 'components/Titulo'
import React, { useEffect, useState } from 'react'
import styles from './Inicio.module.css'

export default function Inicio() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/EversonSoucek/CineTag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <>
            <Banner imagem='home' />
            <Titulo>Um lugar para guardar seus vídeos e filmes! </Titulo>
            <section className={styles.container}>{videos.map((video) => { return <Card {...video} key={video.id}></Card> })}</section>
        </>


    )
}
