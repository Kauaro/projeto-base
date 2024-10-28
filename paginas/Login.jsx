import React, { useState } from 'react';
import './css/login.css';
import './css/style.css';
import favicon from './img/favicon.ico';
import fundo from './img/fundo3.png';
import logo from './img/logo.png';

const Login = () => {
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [lembrar, setLembrar] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if (matricula.trim() === '') {
            alert('Por favor, insira sua matrícula.');
            isValid = false;
        }

        if (senha.trim() === '') {
            alert('Por favor, insira sua senha.');
            isValid = false;
        }

        if (isValid) {
            alert('Formulário válido! Enviando dados...');
            // Aqui você pode implementar a lógica de envio do formulário
        }
    };

    return (
        <div style={{ backgroundImage: `url(${fundo})`, height: '100vh' }}>
            <div className="container">
                <header>
                    <nav className="navbar">
                        <a href="index.html">
                            <img src={logo} alt="Logo SLA" id="logosla" />
                        </a>
                        <ul className="nav-links">
                            <li><a href="index.html">Início</a></li>
                            <li><a href="sobre.html">Sobre nós</a></li>
                            <li><a href="projetos.html">Projetos</a></li>
                            <li><a href="https://fieb.edu.br/">FIEB</a></li>
                        </ul>
                        <a href="login.html">
                            <button className="login-icon" aria-label="Login">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                                </svg>
                            </button>
                        </a>
                    </nav>
                </header>
                <div className="login-container">
                    <h2>Login</h2>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="matricula">Matrícula</label>
                            <input
                                type="text"
                                id="matricula"
                                name="matricula"
                                value={matricula}
                                onChange={(e) => setMatricula(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="lembrar"
                                name="lembrar"
                                checked={lembrar}
                                onChange={(e) => setLembrar(e.target.checked)}
                            />
                            <label htmlFor="lembrar">Lembrar senha</label>
                        </div>
                        <button type="submit" id="submit">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
