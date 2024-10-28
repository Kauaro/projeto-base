import Sidebar from '../components/Menu/Sidebar'
import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
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

      <main>
        <div className="box">
          <h1>OQUE É A S.L.A.</h1>
          <hr />
          <div className="sobre-sla">
            <h3>
              A S.L.A. (Sala de Liberdade de Expressão) é um espaço dedicado a promover discussões e reflexões sobre temas fundamentais como a liberdade de expressão e a forma de lidar com preconceitos na sociedade. As apresentações abordam a importância da liberdade de expressão como um direito humano essencial, discutindo seu papel em uma sociedade democrática. Os alunos são convidados a refletir sobre os limites e as responsabilidades que acompanham esse direito, além das consequências do discurso de ódio e da censura. O objetivo é fomentar um ambiente onde todos se sintam à vontade para expressar suas opiniões, respeitando as diferenças e promovendo um diálogo construtivo.
            </h3>
            <h3>
              Além disso, as apresentações se concentram em como identificar e enfrentar preconceitos presentes em nossa sociedade. Através de atividades interativas, os alunos aprendem a reconhecer estereótipos e discriminações, além de estratégias para agir contra eles. Discussões sobre empatia, respeito e inclusão são centrais, visando desenvolver uma consciência crítica e promover um ambiente mais justo e acolhedor.
            </h3>
            <h3>A S.L.A. busca capacitar os alunos a se tornarem agentes de mudança, prontos para defender seus direitos e os dos outros, enquanto cultivam um espaço de diálogo e respeito mútuo. Por meio dessas discussões, os estudantes são incentivados a praticar a liberdade de expressão de maneira responsável e a combater preconceitos em suas comunidades.</h3>
          </div>
          <img src="img/orgulho.png" alt="orgulho" id="orgulho-img" />
        </div>
      </main>

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

export default AboutPage;