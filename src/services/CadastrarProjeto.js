const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
 
const app = express();
const port = 3001; // ou qualquer porta que preferir
 
app.use(cors());
app.use(bodyParser.json());
 
// Configurações do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'projetos_db'
});
 
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});
 
// Rota para cadastrar projeto
app.post('/api/projetos', (req, res) => {
    const { title, description, theme, aluno_responsavel, professor_representante, participants, schedule } = req.body;
 
    const query = 'INSERT INTO projetos (title, description, theme, aluno_responsavel, professor_representante, participantes, schedule) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [title, description, theme, aluno_responsavel, professor_representante, participants, schedule], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Projeto cadastrado com sucesso!' });
    });
});
 
app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});