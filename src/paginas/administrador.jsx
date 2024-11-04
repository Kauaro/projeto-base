import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.png';
import fundo from './img/fundo3.png';
import insta from './img/insta.png';
import fieb from './img/fieb.png';
import retornar from './img/retornar.png';
import './css/style.css';

const AdminLogin = () => {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (matricula === '' || senha === '') {
      setError('Preencha todos os campos.');
    } else {
      setError('');
      // Aqui você poderia adicionar a lógica de autenticação, como chamada para API
      console.log("Matrícula:", matricula, "Senha:", senha);
      alert("Login realizado com sucesso!");
    }
  };

  return (
    <div className="container" style={{ backgroundImage: `url(${fundo})`, height: '100vh' }}>
      <header>
          <nav className="navbar">

              <img src={logo} alt="" id="logosla" />
            
            <ul className="nav-links">
              <li><Link to="/indexadm" >Início</Link></li>
              <li><Link to="/cadastrarprojeto">Cadastrar Projetos</Link></li>
              <li><Link to="/projetosadm">Projetos</Link></li>
              <li><Link to="/administrador" id="nav-sec">Administrador</Link></li>
            </ul>
            <Link to="/index">
              <img src={retornar} alt=""  id="retornar"/>
            </Link>
          </nav>
        </header>
    <div style={styles.container}>
      <h2>Administrador</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputContainer}>
          <label htmlFor="matricula">Matrícula</label>
          <input
            type="text"
            id="matricula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            style={styles.input}
            placeholder="Digite sua matrícula"
          />
        </div>
        <div style={styles.inputContainer}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={styles.input}
            placeholder="Digite sua senha"
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <Link to="/home ">
        <button type="submit" style={styles.button}>Entrar</button>
        </Link>
      </form>
    </div>
    <footer>
        <a href="https://www.instagram.com/fieb_oficial/">
          <img src={insta} alt="Instagram" className="insta" />
        </a>
        <a href="https://fieb.edu.br/">
          <img src={fieb} alt="FIEB" className="fieb" />
        </a>
        <h3>ITB Brasílio Flores de Azevedo</h3>
        <p>Avenida Grupo Bandeirantes, 138 - Jardim Belval</p>
        <p>Barueri/SP - CEP 06420-150</p>
        <p>2ª a 6ª - das 8h às 18h.</p>
        <p>Telefone (11) 4199-4220 </p>
        <p>contato@fieb.edu.br</p>
        <div className="barra-inferior"></div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: '100px',
    justifyContent: 'center',
    height: '100vh',

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

export default AdminLogin;