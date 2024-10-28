import React from 'react';
import './css/slideshow.css';
import './css/style.css'; // Import your stylesheet
import logo from './img/logo.png';
import racismo from './img/racismo.jpg';
import machismo from './img/machismo.jpg';
import autismo from './img/autismo.jpg';
import orgulho from './img/orgulho.png';
import insta from './img/insta.png';
import fieb from './img/fieb.png';
import { Link } from 'react-router-dom';

const App = () => {
  return (
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

      <section>
        <div className="center-cont">
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img src={racismo} style={{ width: '100%' }} alt="Discriminação racial" />
            </div>
            <div className="mySlides fade">
              <a href="#" target="_blank" rel="external">
                <img src={machismo} style={{ width: '100%' }} alt="" />
              </a>
            </div>
            <div className="mySlides fade">
              <a href="#" target="_blank" rel="external">
                <img src={autismo} style={{ width: '100%' }} alt="" />
              </a>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
          </div>

          <div className="galery">
            <hr className="separador" />
            <div className="conteudo-main">
              <h2>Qual a Importância da S.L.A.</h2>
              <p>As feiras culturais nas escolas são eventos que têm um impacto significativo...</p>
              <p>Um dos aspectos mais importantes dessas feiras é sua capacidade de combater preconceitos...</p>
              <p>Além disso, as feiras culturais oferecem uma plataforma para vozes frequentemente marginalizadas...</p>
              <p>As feiras também incentivam uma conscientização crítica sobre questões sociais e culturais...</p>
              <p>Em resumo, as feiras culturais nas escolas são mais do que simples eventos...</p>
              <img src={orgulho} id="orgulho" alt="" />
            </div>
          </div>
        </div>
      </section>

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

export default App;