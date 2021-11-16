import React, { useEffect, useState } from 'react'
import api from '../../api'

import { useParams } from 'react-router-dom'

import Header from '../../components/Header/Header'

function LerMais() {
  const [lermais, setLermais] = useState({})

  const { id } = useParams()

  useEffect(() => {
    api.get(`edit/${id}`).then(response => {
      setLermais(response.data)
    })
  }, [])

  return (
    <div>
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>{lermais.name}</h2>
            </header>

            <div className="line"></div>

            <p>{lermais.content}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LerMais
