//Importar librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importar contexto
import MyContext from './MyContext';

//Importar componentes
import Navbar from './Components/Navegacion'
import Footer from './Components/Footer'

//Importar vistas
import Home from './views/Home'
import Perfil from './views/Perfil'


//HOLAHOLA//

function App() {

  return (
    <>
      <MyContext.Provider value={""}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </MyContext.Provider>
    </>
  )
}

export default App
