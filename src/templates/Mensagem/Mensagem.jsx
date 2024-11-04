import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header/Header"
import Sidebar from '../../components/Menu/Sidebar'
import logo from '../../assets/images/home.png'

const Mensagem = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/mensagemler')
    }

    const getId = (id) => {
        console.log("ID:", id);
    }
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/home'}
                    title={'Projetos'}
                    logo={logo}
                />
                <section className="p-2 m-2 shadow-lg">
                    <div className="table-wrapper">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Titulo</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Tema</th>
                                    <th scope="col">Aluno Responsavel</th>
                                    <th scope="col">Professor Representante</th>
                                    <th scope="col">Participantes</th>
                                    <th scope="col">Horario da Apresentação</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Mensagem