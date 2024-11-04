import React from 'react';
import { Link } from 'react-router-dom';
import './css/projetos.css';
import './css/style.css'; // Import your stylesheet
import retornar from './img/retornar.png';
import insta from './img/insta.png';
import fieb from './img/fieb.png';
import logo from './img/logo.png';
import homo1 from './img/homo1.jpg';
import homo2 from './img/homo2.jpg';
import racis1 from './img/racismo1.jpg';
import racis3 from './img/racismo3.png';
import fundo from './img/fundo3.png';
import racis4 from './img/racismo4.jpg';
import xeno from './img/xeno.png';
import autism from './img/autis.png';
import music1 from './img/music1.jpg';
import logincad from './img/login-cadastro.png';

const ProjetosAdm = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${fundo})`, height: '100vh' }}>
      <header>
      <nav className="navbar">
              <img src={logo} alt="" id="logosla" />
            
            <ul className="nav-links">
              <li><Link to="/indexadm" id="nav-sec">Início</Link></li>
              <li><Link to="/cadastrarprojeto">Cadastrar Projetos</Link></li>
              <li><Link to="/projetosadm">Projetos</Link></li>
              <li><Link to="/administrador">Administrador</Link></li>
            </ul>
            <Link to="/index">
              <img src={retornar} alt=""  id="retornar"/>
            </Link>
          </nav>
      </header>

        <h1 className="h1P">Projetos</h1>
        <div className="project-grid">
          <div className="project-card">
            <img src={homo1} alt="Casa ecológica com painéis solares e jardim vertical" className="project-image" width="300" height="200" />
            <div className="project-info">
              <h2 className="project-title">Amor Sem Fronteiras: Erradicando a Homofobia com Educação e Empatia</h2>
              <p className="project-description">Promovemos a inclusão e o respeito pela diversidade sexual com programas educativos e eventos de conscientização. Junte-se a nós para construir uma sociedade mais acolhedora e igualitária.</p>
              <div className="star-rating">★★★★★</div>
            </div>
          </div>

          <Link to="/sobreprojetosadm">
            <div className="project-card">
              <img src={racis4

              } className="project-image" width="300" height="200" />
              <div className="project-info">
                <h2 className="project-title">Raízes da Igualdade: Desconstruindo o Racismo</h2>
                <p className="project-description"> Este projeto visa educar e conscientizar sobre as origens e impactos do racismo em nossa sociedade. Através de workshops, palestras e material educativo.</p>
                <div className="star-rating">★★★★☆</div>
              </div>
            </div>
          </Link>
        
        <div class="project-card">
          <img src={homo2} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">Igualdade em Movimento: Diga Não à Homofobia</h2>
            <p class="project-description">Campanhas de mídia e eventos comunitários para espalhar a mensagem de respeito e inclusão, combatendo a homofobia e incentivando o apoio à comunidade LGBTQ+.</p>
            <div class="star-rating">★★★★★</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={racis1} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">Vozes da Diversidade: Unindo Culturas Contra o Racismo</h2>
            <p class="project-description">"Vozes da Diversidade" é um projeto que celebra a riqueza cultural e promove o diálogo intercultural.</p>
            <div class="star-rating">★★★★☆</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={music1} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">Ritmos do Brasil: Celebrando e Preservando a Diversidade Musical</h2>
            <p class="project-description">Valorizamos e preservamos a diversidade musical brasileira com eventos e workshops, promovendo apresentações de diferentes estilos e conectando artistas e públicos.</p>
            <div class="star-rating">★★★★★</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={racis3} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">"Olhe Além: Confrontando o Preconceito no Dia a Dia"</h2>
            <p class="project-description">Este projeto se concentra em ações práticas para enfrentar e reduzir o racismo no cotidiano. Com workshops interativos, campanhas de sensibilização e treinamentos para empresas e instituições.</p>
            <div class="star-rating">★★★★☆</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={racis4} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">"Histórias que Transformam: Narrativas Contra o Racismo"</h2>
            <p class="project-description">"Histórias que Transformam" é uma iniciativa dedicada a compartilhar experiências pessoais e histórias de pessoas que enfrentaram o racismo.</p>
            <div class="star-rating">★★★★★</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={autism} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">Celebrando a Neurodiversidade: Inclusão e Apoio para Todos</h2>
            <p class="project-description">Promovemos inclusão e apoio para pessoas neurodivergentes com workshops e eventos educativos, criando ambientes mais acolhedores e compreensivos.</p>
            <div class="star-rating">★★★★★</div>
          </div>
        </div>
        
        <div class="project-card">
          <img src={xeno} class="project-image" width="300" height="200" />
          <div class="project-info">
            <h2 class="project-title">Pontes Culturais: Combatendo a Xenofobia com Educação e Inclusão</h2>
            <p class="project-description">Enfrentamos a xenofobia com eventos e workshops educativos, promovendo a compreensão e a aceitação de diferentes culturas.</p>
            <div class="star-rating">★★★☆☆</div>
          </div>
        </div>
      
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

export default ProjetosAdm;