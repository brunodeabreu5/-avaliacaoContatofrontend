import React, { Component  } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

class Feed extends Component{

  state = {
    contatos: []
  }

  async componentDidMount() {
    const response = await api.get('contato')
    console.log(response.data)
    this.setState({contatos: response.data })
  }

  render() {
    const { contatos } = this.state;
    return (
      <div>
        <h1>Contatos</h1>
        <ul>
          {contatos.map((contato)=> (
            <li key={contato.id}>
              <p>Id: {contato.id}</p>
              <p>Nome: {contato.nome}</p>
              <p>Email: {contato.email}</p>
              <p>Telefone: {contato.telefone}</p>
            </li>
          ))}
        </ul>
        <Link to="/">retornar a página inicial</Link>
      </div>
    )
  }
}
export default Feed
