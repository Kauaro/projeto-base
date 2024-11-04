import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import { useEffect, useState } from "react";
import UsuarioService from "../../services/UsuarioService";

const UsuarioEditar = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        id: '',
        nome: '',
        email: '',
        matricula: '',
        senha: '',
        nivelAcesso: '',
        statusUsuario: ''
    });

    useEffect(() => {
        const loadUsuario = async () => {
            try {
                const response = await UsuarioService.getById(id);
                setUsuario(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };
        loadUsuario();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UsuarioService.editUsuario(usuario.id, usuario);
            alert("Usuário atualizado com sucesso!");
            navigate('/usuario'); // Redireciona de volta para a lista
        } catch (error) {
            alert("Erro ao atualizar usuário: " + error.message);
            console.error("Erro ao atualizar usuário:", error);
        }
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Editar Usuário'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-md-2">
                            <label htmlFor="inputID" className="form-label">ID</label>
                            <input type="text" className="form-control" id="inputID" readOnly 
                                value={usuario.id} />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" 
                                name="nome" value={usuario.nome} onChange={handleChange} required />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" 
                                name="email" value={usuario.email} onChange={handleChange} required />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputMatricula" className="form-label">Matricula</label>
                            <input type="text" className="form-control" id="inputMatricula" 
                                name="matricula" value={usuario.matricula} onChange={handleChange} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputSenha" className="form-label">Senha</label>
                            <input type="text" className="form-control" id="inputSenha" 
                                name="senha" value={usuario.senha} onChange={handleChange} required />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAcesso" className="form-label">Acesso</label>
                            <select id="inputAcesso" className="form-select" 
                                name="nivelAcesso" value={usuario.nivelAcesso} onChange={handleChange} required>
                                <option value="">Nível de Acesso</option>
                                <option value="Administrador">Administrador</option>
                                <option value="Professor Representante">Professor Representante</option>
                                <option value="Aluno Representante">Aluno Representante</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputStatus" className="form-label">Status</label>
                            <input type="text" className="form-control" id="inputStatus" readOnly 
                                value={usuario.statusUsuario} />
                        </div>
                        
                        <div className="col-12 d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">
                                Gravar Alterações
                            </button>
                            <button type="button" className="btn btn-warning">
                                Reativar / Resetar a Senha
                            </button>
                            <button type="button" className="btn btn-danger">
                                Inativar Conta
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default UsuarioEditar;
