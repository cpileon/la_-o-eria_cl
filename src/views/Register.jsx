import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RegistroForm() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({});

    const handleSetUsuario = ({ target: { value, name } }) => {
        const field = {};
        field[name] = value;
        setUsuario({ ...usuario, ...field });
    };

    const registrarUsuario = async () => {
        const urlServer = "http://localhost:3000";
        const endpoint = "/usuarios";
        try {
            await axios.post(urlServer + endpoint, usuario);
            alert("Usuario registrado con éxito");
            navigate("/login");
        } catch (error) {
            alert("Algo salió mal ...");
            console.log(error);
        }
    };

    return (
        <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
            <h1>Registrar nuevo usuario</h1>
            <hr />
            <div className="form-group mt-1 ">
                <label>Nombre</label>
                <input
                    value={usuario.nombre}
                    onChange={handleSetUsuario}
                    type="text"
                    name="nombre"
                    className="form-control"
                    placeholder="Ingresa tu nombre"
                />
            </div>
            <div className="form-group mt-1 ">
                <label>Apellido</label>
                <input
                    value={usuario.apellido}
                    onChange={handleSetUsuario}
                    type="text"
                    name="apellido"
                    className="form-control"
                    placeholder="Ingresa tu apellido"
                />
            </div>
            <div className="form-group mt-1 ">
                <label>Dirección de correo</label>
                <input
                    value={usuario.email}
                    onChange={handleSetUsuario}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="ingresa tu email"
                />
            </div>
            <div className="form-group mt-1 ">
                <label>Contraseña</label>
                <input
                    value={usuario.password}
                    onChange={handleSetUsuario}
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Ingresa una contraseña"
                />
            </div>


            <button onClick={registrarUsuario} className="btn btn-warning mt-3">
                Registrarme
            </button>
        </div>
    );
}
