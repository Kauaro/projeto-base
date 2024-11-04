import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/slideshow.css';
import './css/style.css';
import logo from './img/logo.png';
import racismo from './img/racismo.jpg';
import machismo from './img/machismo.jpg';
import autismo from './img/autismo.jpg';
import orgulho from './img/orgulho.png';
import insta from './img/insta.png';
import fieb from './img/fieb.png';

const App = () => {
  const slides = [racismo, machismo, autismo];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para alternar entre os slides automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // Atualiza o slide atual ao clicar nos pontos (dots)
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <Link to="/index">
            <img src={logo} alt="Logo" id="logosla" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/index" id="nav-sec">Início</Link></li>
            <li><Link to="/sobre">Sobre nós</Link></li>
            <li><Link to="/projetos">Projetos</Link></li>
            <li><a href="https://fieb.edu.br/">FIEB</a></li>
          </ul>
          <Link to="/login">
            <img src={logo} alt="Login" id="logincad"/>
          </Link>
        </nav>
      </header>

      <section>
        <div className="center-cont">
          <div className="slideshow-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`mySlides ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide} style={{ width: '100%' }} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              ></span>
            ))}
          </div>

          <div className="galery">
            <hr className="separador" />
            <div className="conteudo-main">
              <h2>Qual a Importância da S.L.A.</h2>
              <p>As feiras culturais nas escolas são eventos que têm um impacto significativo no ambiente educacional e na formação de valores entre os alunos. Elas promovem a valorização e a celebração da diversidade cultural, permitindo que os estudantes explorem e aprendam sobre diferentes tradições, idiomas, costumes e histórias. Isso não só enriquece o conhecimento cultural dos alunos, mas também ajuda a construir um ambiente mais inclusivo, onde todos se sentem respeitados e valorizados.</p>
                <p>Um dos aspectos mais importantes dessas feiras é sua capacidade de combater preconceitos. Ao expor os alunos a culturas diversas, elas desafiam estereótipos e preconceitos arraigados, proporcionando uma visão mais ampla do mundo. Essa interação ajuda a desenvolver empatia, pois os alunos começam a entender e valorizar as experiências e lutas de outras pessoas, o que é fundamental para a convivência em sociedade.</p>
                <p>Além disso, as feiras culturais oferecem uma plataforma para vozes frequentemente marginalizadas, permitindo que seus relatos e contribuições sejam compartilhados. Isso é essencial para promover a equidade e a justiça social, pois dá espaço para que todos os alunos se sintam representados e ouvidos.</p>
                <p>As feiras também incentivam uma conscientização crítica sobre questões sociais e culturais, estimulando os alunos a refletir sobre sua própria identidade e a dos outros. Essa reflexão é fundamental para formar cidadãos mais informados e engajados, que podem contribuir para uma sociedade mais justa e respeitosa.</p>
                <p>Em resumo, as feiras culturais nas escolas são mais do que simples eventos; elas são oportunidades de aprendizado, empatia, inclusão e crescimento pessoal. Ao promover a diversidade e combater preconceitos, essas iniciativas ajudam a moldar um futuro mais harmonioso e igualitário.</p>
              <img src={orgulho} id="orgulho" alt="Orgulho" />
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
        <p>Telefone (11) 4199-4220</p>
        <p>contato@fieb.edu.br</p>
        <div className="barra-inferior"></div>
      </footer>
    </div>
  );
};

export default App;
