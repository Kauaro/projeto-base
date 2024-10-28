import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/sobreprojetos.css';
import './css/style.css';

function SobreProjetos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showItem = (index) => {
    const carousel = document.querySelector('.carousel-inner');
    carousel.style.transform = `translateX(-${index * 100}%)`;
  };

  const handleNext = (e) => {
    e.preventDefault();
    setCurrentIndex((currentIndex + 1) % items.length);
    showItem(currentIndex);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    showItem(currentIndex);
  };

  const items = [
    <div className="carousel-item" key={0}>
      <img src="img/racismosp.jfif" alt="RACISMO NAO" />
    </div>,
    <div className="carousel-item" key={1}>
      <img src="img/mao preta2.jpg" alt="RACISMO NAO" />
    </div>,
    <div className="carousel-item" key={2}>
      <img src="img/racismo1.jpg" alt="RACISMO NAO" />
    </div>,
  ];

  return (
    <div>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-box-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"
            />
            <path
              fillRule="evenodd"
              d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"
            />
          </svg>
        </Link>
      </nav>
      <div className="container-sp">
        <h1>Raízes da Igualdade</h1>
        <Link to="/projetosadm.html">
          <img src="img/voltar.jfif" id="voltarimg" alt="" />
        </Link>
        <div className="carousel">
          <div className="carousel-inner">{items}</div>
          <a href="#" className="carousel-control prev" onClick={handlePrev}>
            &lt;
          </a>
          <a href="#" className="carousel-control next" onClick={handleNext}>
            &gt;
          </a>
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
            <p>
              <strong>Ana S.</strong> - "Incrível! Mudou completamente minha rotina para melhor."
            </p>
          </div>
          <div className="review">
            <div className="stars">★★★★☆</div>
            <p>
              <strong>Carlos M.</strong> - "Muito bom, mas ainda há espaço para melhorias na interface."
            </p>
          </div>
          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              <strong>Luciana R.</strong> - "Simplesmente fantástico! Recomendo a todos."
            </p>
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