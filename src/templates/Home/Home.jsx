import { Link } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'
import './home.css'

const Home = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
                <Header 
                    goto={'/indexadm'}
                    title={'Seja Bem-Vindo'}
                    logo={logo}
                    />
                <section className="m-2 p-2 shadow-lg">
                    <h2>Bem-vindo ao Painel do Administrador</h2>
                    <p>Use o menu lateral para navegar pelas diferentes seções do sistema.</p>

                    <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Gerenciar Usuários</h5>
                                <p className="card-text">Adicionar, editar ou remover usuários do sistema.</p>
                                <Link to="/usuario" className="btn btn-primary">Ir para Usuários</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Gerenciar Projetos</h5>
                                <p className="card-text">Visualizar, editar ou excluir projetos cadastrados.</p>
                                <Link to="/mensagem" className="btn btn-primary">Ir para Projetos</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Relatórios</h5>
                                <p className="card-text">Visualizar relatórios de atividade do sistema.</p>
                                <Link to="/relatorios" className="btn btn-primary">Ver Relatórios</Link>
                            </div>
                        </div>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Home