import React, { Component, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'



const axios = require('axios').default;
const nome = ['pedro', 'joao']

export default function Sobre() {
  const [busca, setBusca, contato, setUser] = useState('')

  useEffect(() => {
    api
      .get("/contato")
      .then(response => setUser(response.data))
      .catch(err => {
        console.error('ops! ocorreu ' + err)
      })
  }, [])

  return (
    <div className="App">
      
    </div>
  )

  /*const nomeFiltra = useMemo(() => {
    const lowerBusca = busca.toLowerCase()
    return nome.filter(nome => nome.toLowerCase().includes(lowerBusca))
  }, [busca])

  return (
    <div>
      <h1>Contatos</h1>
      <input
        type="text"
        value={busca}
        onChange={ev => setBusca(ev.target.value)}
      />
      <ul>
        {nomeFiltra.map(nome => (
          <li key={nome}>{nome}</li>
        ))}
      </ul>
      <Link to="/">retornar a página inicial</Link>
    </div>
  )*/
}
