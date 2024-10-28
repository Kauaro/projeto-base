import React, { useState } from 'react';
import './css/cadastrarprojeto.css'; // ou seu CSS
 
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
            const response = await fetch('http://localhost:3001/api/projetos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
 
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                // Limpar formulário ou redirecionar
            } else {
                alert('Erro: ' + data.error);
            }
        } catch (error) {
            console.error('Erro ao cadastrar projeto:', error);
            alert('Erro ao cadastrar projeto');
        }
    };
 
    return (
<div className="container">
<h1>Cadastro de Projetos</h1>
<form onSubmit={handleSubmit}>
<label htmlFor="title">Título:</label>
<input type="text" id="title" name="title" required onChange={handleChange} />
 
                <label htmlFor="description">Descrição:</label>
<textarea id="description" name="description" rows="4" required onChange={handleChange}></textarea>
 
                <label htmlFor="theme">Tema:</label>
<input type="text" id="theme" name="theme" required onChange={handleChange} />
 
                <label htmlFor="aluno_responsavel">Aluno Responsável:</label>
<input type="text" id="aluno_responsavel" name="aluno_responsavel" required onChange={handleChange} />
 
                <label htmlFor="professor_representante">Professor Representante:</label>
<input type="text" id="professor_representante" name="professor_representante" onChange={handleChange} />
 
                <label htmlFor="participants">Participantes:</label>
<input type="text" id="participants" name="participants" required onChange={handleChange} />
 
                <label htmlFor="schedule">Horário de Apresentação:</label>
<select id="schedule" name="schedule" required onChange={handleChange}>
<option value="7h às 15h">7h às 15h</option>
<option value="7h às 20h">7h às 20h</option>
<option value="13h às 20h">13h às 20h</option>
</select>
 
                <button type="submit">Cadastrar Projeto</button>
</form>
</div>
    );
};
 
export default CadastrarProjeto;