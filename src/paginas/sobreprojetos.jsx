import React from 'react';
import './css/sobreprojetos.css';
import './css/style.css';

function SobreProjetos() {
  return (
    <div>
      <nav className="navbar">
        <a href="index.html">
          <img src="img/logo.png" alt="" id="logosla" />
        </a>
        <ul className="nav-links">
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
      <div className="container-sp">
        <h1>Raízes da Igualdade</h1>
        <a href="projetos.html">
          <img src="img/voltar.jfif" id="voltarimg" alt="" />
        </a>
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item"><img src="img/racismosp.jfif" alt="RACISMO NAO" /></div>
            <div className="carousel-item"><img src="img/mao preta2.jpg" alt="RACISMO NAO" /></div>
            <div className="carousel-item"><img src="img/racismo1.jpg" alt="RACISMO NAO" /></div>
          </div>
          <a href="#" className="carousel-control prev">&lt;</a>
          <a href="#" className="carousel-control next">&gt;</a>
        </div>
        <div className="description">
          <h2>Sobre o Projeto</h2>
          <p>Raízes da Igualdade: Desconstruindo o Racismo</p>
          <p className="project-description">
            O projeto "Raízes da Igualdade" tem como objetivo educar e conscientizar sobre as origens e impactos do racismo na sociedade. Através de workshops interativos, palestras com especialistas e materiais educativos, buscamos promover um diálogo aberto e reflexões críticas. Com a participação de ativistas e líderes comunitários, o projeto visa desconstruir estereótipos e incentivar ações em prol de uma sociedade mais justa e equitativa, onde todos desfrutem dos mesmos direitos e oportunidades. Junte-se a nós nessa jornada de aprendizado e transformação!
          </p>
          <h4>SALA 00</h4>
        </div>
        <div className="reviews">
          <h2>Avaliações dos Usuários</h2>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p><strong>Ana S.</strong> - "Incrível! Mudou completamente minha rotina para melhor."</p>
          </div>
          <div className="review">
            <div className="stars">★★★★☆</div>
            <p><strong>Carlos M.</strong> - "Muito bom, mas ainda há espaço para melhorias na interface."</p>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p><strong>Luciana R.</strong> - "Simplesmente fantástico! Recomendo a todos."</p>
          </div>
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
}

export default SobreProjetos;