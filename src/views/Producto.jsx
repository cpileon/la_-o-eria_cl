import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Context from "../Context";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/* import "../assets/pizza.css" */

export default function Producto() {

    const { productos, prevCarrito, setPrevCarrito, total, setTotal } = useContext(Context)

    const [chosenProducto, setChosenProducto] = useState();

    const params = useParams();
    const navigate = useNavigate();

    const getChosenProducto = () => {
        return setChosenProducto(productos.filter((item) => item.id === params.id));
    };

    const volverInicio = (e) => {
        navigate("/")
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

        setTotal(
            prevCarrito.reduce((a, { price, count }) =>
                a + price * count
                , 0)
        );

        console.log("este es el total:" + (total))
    }

    useEffect(() => {
        getChosenProducto();
    }, []);

    console.log(chosenProducto);


    return (
        <div>
            {chosenProducto ? (
                <Card className="container">
                    <div >
                        <img className="imgContainer" src={chosenProducto[0].img} alt="" />
                    </div>
                    <Card.Body>
                        <Card.Title className="titleP"><h2>{chosenProducto[0].name}</h2></Card.Title>
                        <Card.Text>
                            {chosenProducto[0].desc}
                        </Card.Text>
                        <hr />
                        <dl>
                            <dt>Ingredientes:</dt>
                            <br />
                            {chosenProducto[0].ingredients.map((ing) => {
                                return (
                                    <dd key={ing}>🍕{ing[0].toUpperCase() + ing.substring(1)}</dd>
                                )
                            })}
                        </dl>
                        <hr />
                        <div className="bottom">
                            <h3>Precio: ${chosenProducto[0].price.toLocaleString()}</h3>
                            <Button className="bAdd" onClick={() => agregarAlCarrito(chosenProducto[0])} id={chosenProducto[0].id} variant="danger">Añadir 🛒</Button>
                        </div>
                    </Card.Body>
                    <div><Button className="btn btn-secondary" onClick={volverInicio}>Atrás</Button></div>
                </Card>

            ) : null
            }
        </div >
    )
}