import React from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

export default function Feed() {
  const [contatos, setPosts] = React.useState([])

  React.useEffect(() => {
    api
      .get('contato')
      .then(response => {
        setPosts(response.data)
      })
      .catch(() => {
        console.log('Deu certo')
      })
  }, [])

  return (
    <div>
      <h2>Contatos</h2>
      <main>
        <div className="cards">
          {contatos.map((contato, key) => {
            return (
              <div className="card" key={key}>
                <div className="line"></div>
                <p>Id: {contato.id}</p>
                <p>Nome: {contato.nome}</p>
                <p>Email: {contato.email}</p>
                <p>Telefone: {contato.telefone}</p>
              </div>
            )
          })}
        </div>
      </main>
      <Link to="/">retornar a página inicial</Link>
    </div>
  )
}

