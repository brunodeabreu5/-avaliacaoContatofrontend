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

  function deletePost(id) {
    api.delete(`contato/${id}`)
    setPosts(contatos.filter(data => data.id !== id))
  }
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
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${contato.id}` }}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  <div className="btn-delete">
                    <button onClick={() => deletePost(contato.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div> 
            )
          })}
        </div>
      </main>
      <Link to="/">retornar a página inicial</Link>
    </div>
  )
}
