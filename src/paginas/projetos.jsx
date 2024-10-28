import React from 'react';

const ProjectsPage = () => {
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