import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import UsuarioService from "../../services/UsuarioService";
import logo from '../../assets/images/home.png';
import './UsuarioNovo.css'; // Importe seu CSS

const UsuarioNovo = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const [acesso, setAcesso] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const novoUsuario = { nome, email, matricula, senha, nivelAcesso: acesso, statusUsuario: 'Ativo' };

        try {
            await UsuarioService.createUsuario(novoUsuario); // Chama o serviço simulado
            alert("Usuário cadastrado com sucesso!");
            navigate('/usuarioslista'); // Redireciona para a lista de usuários após o cadastro
        } catch (error) {
            alert("Erro ao cadastrar usuário: " + error.message);
            console.error("Erro ao cadastrar usuário:", error);
        }
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Novo Usuário'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form onSubmit={handleSubmit} >
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputMatricula" className="form-label">Matricula</label>
                            <input type="text" className="form-control" id="inputMatricula" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputSenha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="inputSenha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select" value={acesso} onChange={(e) => setAcesso(e.target.value)} required>
                                <option value="">Nível de Acesso</option>
                                <option>Administrador</option>
                                <option>Professor Representante</option>
                                <option>Aluno Representante</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit">Gravar</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UsuarioNovo;
