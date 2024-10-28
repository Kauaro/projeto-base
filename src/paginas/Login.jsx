import React, { useState } from 'react';
import './css/login.css';
import './css/style.css';
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
          <Link to="index.html">
            <img src={logo} alt="Logo" id="logosla" />
          </Link>
          <ul className="nav-links">
          <li><Link to="/" id="nav-sec">Início</Link></li>
  <li><Link to="/sobre">Sobre nós</Link></li>
  <li><Link to="/projetos">Projetos</Link></li>
  <li><a href="https://fieb.edu.br/">FIEB</a></li>
          </ul>
          <Link to="login.jsx">
            <button className="login-icon" aria-label="Login">
              {/* SVG code here */}
            </button>
          </Link>
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
