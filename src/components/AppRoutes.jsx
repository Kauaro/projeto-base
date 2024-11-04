import { Routes, Route } from "react-router-dom"
import App from "../templates/App/App"
import Home from "../templates/Home/Home"

import ForgotPass from "../templates/Login/ForgotPass"
import LoginU from "../templates/Login/Login"

import Mensagem from "../templates/Mensagem/Mensagem"
import MensagemLer from "../templates/Mensagem/MensagemLer"

import Index from "../paginas/index"
import Sobre from "../paginas/sobre"
import SobreProjetos from "../paginas/sobreprojetos"
import Projetos from "../paginas/projetos"
import CadastrarProjeto from "../paginas/CadastrarProjeto"
import Projetosadm from "../paginas/projetosadm"
import Sobreprojetosadm from "../paginas/sobreprojetosadm"
import Login from "../paginas/Login"
import Administrador from "../paginas/administrador"
import IndexAdm from "../paginas/indexadm"


import Usuario from "../templates/Usuario/Usuario"
import UsuarioEditar from "../templates/Usuario/UsuarioEditar"
import UsuarioNovo from "../templates/Usuario/UsuarioNovo"
import UsuariosLista from "../templates/Usuario/UsuariosLista"


const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpass" element={<ForgotPass />} />

        <Route path="/mensagem" element={<Mensagem />} />
        <Route path="/mensagemler" element={<MensagemLer />} />


        <Route path="/usuario" element={<Usuario />} />
        <Route path="/usuarioslista" element={<UsuariosLista />} />
        <Route path="/usuarionovo" element={<UsuarioNovo />} />
        <Route path="/usuarioeditar/:id" element={<UsuarioEditar />} />

        <Route path="/index" element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sobreprojetos" element={<SobreProjetos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/projetosadm" element={<Projetosadm />} />
        <Route path="/login" element={<LoginU />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/indexadm" element={<IndexAdm />} />
        <Route path="/sobreprojetosadm" element={<Sobreprojetosadm />} />
        <Route path="/cadastrarprojeto" element={<CadastrarProjeto />} />


      </Routes>
    </div>
  )
}
export default AppRoutes