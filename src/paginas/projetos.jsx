import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="container">
      <header>
        <nav className="navbar">
          <a href="index.html">
            <img src="img/logo.png" alt="" id="logoslap" />
          </a>
          <ul className="nav-linksp">
            <li><a href="index.html">Início</a></li>
            <li><a href="sobre.html">Sobre nós</a></li>
            <li><a href="projetos.html" id="nav-sec">Projetos</a></li>
            <li><a href="https://fieb.edu.br/">FIEB</a></li>
          </ul>
          <a href="login.html">
            <button className="login-icon" aria-label="Login">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </button>
          </a>
        </nav>
      </header>

      <div className="container-p">
        <h1>Projetos</h1>
        <div className="project-grid">
          {/* Project cards go here */}
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

export default ProjectsPage;