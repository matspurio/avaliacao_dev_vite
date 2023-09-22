import Header from './components/Header'
import MainRoutes from './routes'
import GlobalStyle from './styles/global'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
        <Header />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
