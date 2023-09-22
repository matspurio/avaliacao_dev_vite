import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import CadastrarAtleta from '../pages/Cadastrar'
import Atletas from '../pages/Atletas'
import Acessos from '../pages/Acessos'
import RecuperarSenha from '../pages/Recuperar-senha'

const MainRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<CadastrarAtleta />} path="/cadastrar" />
      <Route element={<Atletas />} path="/" />
      <Route element={<Acessos />} path="/acessos" />
      <Route element={<RecuperarSenha />} path="/recuperar-senha" />
    </Routes>
  )
}

export default MainRoutes
