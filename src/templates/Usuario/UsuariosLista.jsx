import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Menu/Sidebar';
import logo from '../../assets/images/home.png';
import UsuarioService from "../../services/UsuarioService";
import { useEffect, useState } from "react";


const UsuariosLista = () => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        loadUsuarios();
    }, []);

    const loadUsuarios = async () => {
        try {
            const response = await UsuarioService.getAllUsuarios();
            setUsuarios(response.data);
        } catch (error) {
            console.error("Erro ao buscar usuários:", error);
        }
    };

    const getId = (id) => {
        navigate(`/usuarioeditar/${id}`); // Navegar para a página de edição
    };

    const handleDelete = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
            try {
                await UsuarioService.deleteUsuario(id);
                setUsuarios(usuarios.filter(usuario => usuario.id !== id)); // Atualizar o estado local
                alert("Usuário excluído com sucesso!");
            } catch (error) {
                console.error("Erro ao excluir usuário:", error);
            }
        }
    };

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuários'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Matricula</th>
                                    <th scope="col">Senha</th>
                                    <th scope="col">Acesso</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usuarios.map((usuario) => (
                                    <tr key={usuario.id}>
                                        <td>{usuario.id}</td>
                                        <td>{usuario.nome}</td>
                                        <td>{usuario.email}</td>
                                        <td>{usuario.matricula}</td>
                                        <td>{usuario.senha}</td>
                                        <td>{usuario.nivelAcesso}</td>
                                        <td>{usuario.statusUsuario}</td>
                                        <td>
                                            <button onClick={() => getId(usuario.id)} className="btn btn-sm btn-warning rounded ">
                                                Editar
                                            </button>
                                            <button onClick={() => handleDelete(usuario.id)} className="btn btn-sm btn-danger rounded ms-2">
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UsuariosLista;