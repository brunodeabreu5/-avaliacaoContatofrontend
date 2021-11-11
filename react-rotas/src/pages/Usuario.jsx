import React from 'react';
import { Link } from "react-router-dom";

const Usuario = () => {
    return (
        <div>
            <h1>Cadastro</h1>
            <form>
                <label>Nome</label>
                <input type="text" />
                <div>
                <label>Email</label>
                <input type="text" />
                </div>
                <label>Telefone</label>
                <input type="text" />
            </form>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default Usuario;