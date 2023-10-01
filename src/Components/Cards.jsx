import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/* import "../assets/cards.css" */

export default function Cards() {

    const { productos, prevCarrito, setPrevCarrito } = useContext(Context);
    const navigate = useNavigate();

    const verDetalle = (e) => {
        navigate(`/producto/${e.target.id}`)
    }

    const agregarAlCarrito = ({ id, price, name, img }) => {
        const itemProducto = productos.find((item) => item.id === id);
        const index = prevCarrito.findIndex((item) => item.id === id)
        const producto = { id, price, name, img, count: 1 };

        if (index >= 0) {
            prevCarrito[index].count++;
            setPrevCarrito([...prevCarrito]);

        } else {
            setPrevCarrito([...prevCarrito, producto]);

        }

        /* console.log("este es el total:" + (total)) */
    }

    return (
        <div className="galeria grid-columns-3 p-3">
            {productos.map((producto) => {
                return (
                    <Card key={producto.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={producto.img} />
                        <Card.Body>
                            <Card.Title className="titles">{producto.name}</Card.Title>
                            <hr />
                            <dl>
                                <dt>Ingredientes:</dt>
                                <br />
                                {producto.ingredients.map((ing) => {
                                    return (
                                        <dd key={ing}>🍕{ing[0].toUpperCase() + ing.substring(1)}</dd>
                                    )
                                })}
                            </dl>
                            <hr />
                            <Card.Text className="prices">
                                <strong> $ {producto.price.toLocaleString()} </strong>
                            </Card.Text>
                            <div className="botones">
                                <Button className="bVermas" onClick={verDetalle} id={producto.id} variant="info">Ver Más 👀</Button>
                                <Button className="bAdd" onClick={() => agregarAlCarrito(producto)} id={producto.id} variant="danger">Añadir 🛒</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}

        </div>
    )
}