import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const WebsiteLayout = () => {
  return (
    <Router>
      <div className="container">
        {/* header */}
        <header>
          <nav className="navbar">
            <Link to="/indexadm">
              <img src="img/logo.png" alt="" id="logosla" />
            </Link>
            <ul className="nav-links">
              <li><Link to="/indexadm" id="nav-sec">Início</Link></li>
              <li><Link to="/cadastrarprojeto">Cadastrar Projetos</Link></li>
              <li><Link to="/projetosadm">Projetos</Link></li>
              <li><Link to="/Chat">Chat</Link></li>
            </ul>
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
              </svg>
            </Link>
          </nav>
        </header>

        {/* main content */}
        <section>
          <div className="center-cont">
            {/* carousel */}
            <div className="slideshow-container">
              <div className="mySlides fade">
                <img src="img/racismo.jpg" style={{ width: '100%' }} alt="Discriminação racial" />
              </div>

              <div className="mySlides fade">
                <a href="#" target="_blank" rel="external">
                  <img src="img/machismo.jpg" style={{ width: '100%' }} />
                </a>
              </div>

              <div className="mySlides fade">
                <a href="#" target="_blank" rel="external">
                  <img src="img/autismo.jpg" style={{ width: '100%' }} />
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

                <p>As feiras culturais nas escolas são eventos que têm um impacto significativo no ambiente educacional e na formação de valores entre os alunos. Elas promovem a valorização e a celebração da diversidade cultural, permitindo que os estudantes explorem e aprendam sobre diferentes tradições, idiomas, costumes e histórias. Isso não só enriquece o conhecimento cultural dos alunos, mas também ajuda a construir um ambiente mais inclusivo, onde todos se sentem respeitados e valorizados.</p>
                <p>Um dos aspectos mais importantes dessas feiras é sua capacidade de combater preconceitos. Ao expor os alunos a culturas diversas, elas desafiam estereótipos e preconceitos arraigados, proporcionando uma visão mais ampla do mundo. Essa interação ajuda a desenvolver empatia, pois os alunos começam a entender e valorizar as experiências e lutas de outras pessoas, o que é fundamental para a convivência em sociedade.</p>
                <p>Além disso, as feiras culturais oferecem uma plataforma para vozes frequentemente marginalizadas, permitindo que seus relatos e contribuições sejam compartilhados. Isso é essencial para promover a equidade e a justiça social, pois dá espaço para que todos os alunos se sintam representados e ouvidos.</p>
                <p>As feiras também incentivam uma conscientização crítica sobre questões sociais e culturais, estimulando os alunos a refletir sobre sua própria identidade e a dos outros. Essa reflexão é fundamental para formar cidadãos mais informados e engajados, que podem contribuir para uma sociedade mais justa e respeitosa.</p>
                <p>Em resumo, as feiras culturais nas escolas são mais do que simples eventos; elas são oportunidades de aprendizado, empatia, inclusão e crescimento pessoal. Ao promover a diversidade e combater preconceitos, essas iniciativas ajudam a moldar um futuro mais harmonioso e igualitário.</p>

                <img src="img/orgulho.png" id="orgulho" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <footer>
        <a href="https://www.instagram.com/fieb_oficial/">
          <img src="img/insta.png" alt="" className="insta" />
        </a>
        <a href="https://fieb.edu.br/">
          <img src="img/fieb.png" alt="" className="fieb" />
        </a>
        <h3>ITB Brasílio Flores de Azevedo</h3>
        <p>Avenida Grupo Bandeirantes, 138 - Jardim Belval</p>
        <p>Barueri/SP - CEP 06420-150</p>
        <p>2ª a 6ª - das 8h às 18h.</p>
        <p>Telefone (11) 4199-4220</p>
        <p>contato@fieb.edu.br</p>
        <div className="barra-inferior"></div>
      </footer>
    </Router>
  );
};

export default WebsiteLayout;