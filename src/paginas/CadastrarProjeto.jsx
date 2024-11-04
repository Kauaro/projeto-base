import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/style.css'; // Import your stylesheet
import './css/cadastrarprojeto.css'; // ou seu CSS
import insta from './img/insta.png';
import fieb from './img/fieb.png';
import retornar from './img/retornar.png';
import logo from './img/logo.png'; // Supondo que tenha um logo nesta localização

const CadastrarProjeto = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    theme: '',
    aluno_responsavel: '',
    professor_representante: '',
    participants: '',
    schedule: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5173/projetos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message || 'Projeto cadastrado com sucesso!');
        setFormData({
          title: '',
          description: '',
          theme: '',
          aluno_responsavel: '',
          professor_representante: '',
          participants: '',
          schedule: '',
        });
      } else {
        alert('Erro: ' + data.error);
      }
    } catch (error) {
      console.error('Erro ao cadastrar projeto:', error);
      alert('Erro ao cadastrar projeto');
    }
  };

  return (
   <div>
    <header>
        <nav className="navbarcp">
          <img src={logo} alt="" id="logosla" />

          <ul className="nav-links">
            <li><Link to="/indexadm">Início</Link></li>
            <li><Link to="/cadastrarprojeto" id="nav-sec">Cadastrar Projetos</Link></li>
            <li><Link to="/projetosadm">Projetos</Link></li>
            <li><Link to="/administrador">Administrador</Link></li>
          </ul>
          <Link to="/index">
            <img src={retornar} alt="" id="retornar" />
          </Link>
        </nav>
      </header>

    <div className="container-cp">
      
      <h1>Cadastro de Projetos</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" name="title" required value={formData.title} onChange={handleChange} />

        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description" rows="4" required value={formData.description} onChange={handleChange}></textarea>

        <label htmlFor="theme">Tema:</label>
        <input type="text" id="theme" name="theme" required value={formData.theme} onChange={handleChange} />

        <label htmlFor="aluno_responsavel">Aluno Responsável:</label>
        <input type="text" id="aluno_responsavel" name="aluno_responsavel" required value={formData.aluno_responsavel} onChange={handleChange} />

        <label htmlFor="professor_representante">Professor Representante:</label>
        <input type="text" id="professor_representante" name="professor_representante" value={formData.professor_representante} onChange={handleChange} />

        <label htmlFor="participants">Participantes:</label>
        <input type="text" id="participants" name="participants" required value={formData.participants} onChange={handleChange} />

        <label htmlFor="schedule">Horário de Apresentação:</label>
        <select id="schedule" name="schedule" required value={formData.schedule} onChange={handleChange}>
          <option value="">Selecione o horário</option>
          <option value="7h às 15h">7h às 15h</option>
          <option value="7h às 20h">7h às 20h</option>
          <option value="13h às 20h">13h às 20h</option>
        </select>

        <button type="submit">Cadastrar Projeto</button>
      </form>

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
        <p>Telefone (11) 4199-4220</p>
        <p>contato@fieb.edu.br</p>
        <div className="barra-inferior"></div>
      </footer>
    
    </div>
  );
};

export default CadastrarProjeto;
