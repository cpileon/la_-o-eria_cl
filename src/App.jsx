//Importar librerias
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Importar contexto
import { Provider } from "./Context";

//Importar componentes
import Navbar from './Components/Navegacion'
import Footer from './Components/Footer'

//Importar vistas
import Home from './views/Home'
import Perfil from './views/Perfil'
import Login from './views/Login'
import Register from './views/Register'
import Tienda from './views/Tienda'
import Producto from './views/Producto'
import Carrito from './views/Carrito'


//HOLAHOLA//

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
