import Cabecalho from 'components/Cabecalho'
import Container from 'components/Container'
import Rodape from 'components/Rodape'
import FavoritosProvider from 'context/Favoritos'
import Favoritos from 'pages/Favoritos'
import Inicio from 'pages/Inicio'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaBase from 'pages/PaginaBase'
import Player from 'pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <FavoritosProvider>
                <Routes>
                    <Route path='/' element={<PaginaBase />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path='favoritos' element={<Favoritos />}></Route>
                        <Route path='
                            :id' element={<Player />}></Route>
                        <Route path='*' element={<NaoEncontrada />}></Route>
                    </Route>
                </Routes>
            </FavoritosProvider>
        </BrowserRouter >
    )
}
