import React, { useState, useEffect } from 'react'

import api from '../../api'
import { Link } from 'react-router-dom'

import { useNavigate, useParams } from 'react-router-dom'

import '../post/Post.css'

export default function Edit() {
  const { id } = useParams()

  const history = useNavigate()

  const [data, setData] = useState({
    nome: '',
    email: '',
    telefone: ''
  })

  function submit() {
    api.put(`contato/${id}`, data).then(response => {
      console.log(response.data)
    })
    history('/feed')
  }

  const getData = async () => {
    const response = await api.get(`contato/${id}`)
    setData(response.data)
    console.log(response.data)
    return response.data
  }

  useEffect(() => {
    getData()
  }, [])

  function handle({ target: { name, value } }) {
    setData({ ...data, [name]: value })
  }

  return (
    <di>
      <main>
        <div className="cad-post">
          <h1>Editar Contato</h1>
          <div className="line-post"></div>
          <div className="card=body-post">
            <form onSubmit={submit}>
              <div className="fields">
                <label>Nome</label>
                <input
                  type="text"
                  placeholder="name"
                  onChange={handle}
                  name="nome"
                  value={data.nome}
                  id="nome"
                />
              </div>
              <div className="fields">
                <label>Email</label>
                <input
                  type="text"
                  onChange={handle}
                  value={data.email}
                  id="email"
                  name="email"
                  placeholder="email"
                />
              </div>
              <div className="fields">
                <label>Telefone</label>
                <input
                  placeholder="telefone"
                  type="text"
                  value={data.telefone}
                  onChange={handle}
                  id="telefone"
                  name="telefone"
                />
              </div>
              <di className="btn-post">
                <button type="submit">Salvar</button>
              </di>
            </form>
            <div className="link">
            <Link  to="/">retornar a página inicial</Link>
            </div>
          </div>
        </div>
      </main>
    </di>
  )
}
