import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPageAdmin = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <Link to="/indexadm.html">
            <img src="img/logo.png" alt="" id="logosla" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/indexadm.html">Início</Link></li>
            <li><Link to="/cadastrarprojeto.html">Cadastrar Projetos</Link></li>
            <li><Link to="/projetosadm.html" id="nav-sec">Projetos</Link></li>
            <li><Link to="/Chat.html">Chat</Link></li>
          </ul>
          <Link to="/index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
              <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
            </svg>
          </Link>
        </nav>
      </header>

      <div className="container-p">
        <h1>Projetos</h1>
        <div className="project-grid">
          <div className="project-card">
            <img src="img/homo1.jpg" alt="Casa ecológica com painéis solares e jardim vertical" className="project-image" width="300" height="200" />
            <div className="project-info">
              <h2 className="project-title">Amor Sem Fronteiras: Erradicando a Homofobia com Educação e Empatia</h2>
              <p className="project-description">Promovemos a inclusão e o respeito pela diversidade sexual com programas educativos e eventos de conscientização. Junte-se a nós para construir uma sociedade mais acolhedora e igualitária.</p>
              <div className="star-rating">★★★★★</div>
            </div>
          </div>

          <Link to="/sobreprojetosadm.html">
            <div className="project-card">
              <img src="img/racismo2.jpg" className="project-image" width="300" height="200" />
              <div className="project-info">
                <h2 className="project-title">Raízes da Igualdade: Desconstruindo o Racismo</h2>
                <p className="project-description"> Este projeto visa educar e conscientizar sobre as origens e impactos do racismo em nossa sociedade. Através de workshops, palestras e material educativo.</p>
                <div className="star-rating">★★★★☆</div>
              </div>
            </div>
          </Link>

          {/* Additional project cards go here */}
        </div>
      </div>

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
    </div>
  );
};

export default ProjectsPageAdmin;