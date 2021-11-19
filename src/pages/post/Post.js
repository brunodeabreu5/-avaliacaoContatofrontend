import React, { useState } from 'react'

import api from '../../api'
import { Link, useNavigate } from 'react-router-dom'

import './Post.css'

export default function Post() {
  const history = useNavigate()
  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  function submit(e) {
    e.preventDefault()
    api
      .post('contato', {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone
      })
      .then(response => {
        console.log(response.data)
        history('/')
      })
  }

  function handle(e) {
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value
    setData(newdata)

    console.log(newdata)
  }

  return (
    <di>
      <main>
        <div className="cad-post">
          <h1>Cadastra Contato</h1>
          <div className="line-post"></div>
          <div className="card=body-post">
            <form onSubmit={e => submit(e)}>
              <div className="fields">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="name"
                  onChange={e => handle(e)}
                  value={data.nome}
                  id="nome"
                />
              </div>
              <div className="fields">
                <label>Email</label>
                <input
                  type="email"
                  onChange={e => handle(e)}
                  value={data.email}
                  data-testid ="email"
                  id="email"
                  placeholder="email"
                />
                {data.email && !(/\S+@\S+\.\S+/).test(data.email) && <span  data-testid="error-msg">Entre com outro email valido</span>}
              </div>
              <div className="fields">
                <label>Telefone</label>
                <input
                  placeholder="telefone"
                  type="text"
                  value={data.telefone}
                  onChange={e => handle(e)}
                  id="telefone"
                />
              </div>
              <di className="btn-post">
                <button type="submit">Salvar</button>
              </di>
            </form>
            <div className="link">
            <Link to="/">retornar a página inicial</Link>
            </div>
          </div>
        </div>
      </main>
    </di>
  )
}
