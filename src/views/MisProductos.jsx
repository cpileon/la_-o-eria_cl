import React, { useContext } from "react";
import Context from "../Context";
import Card from "react-bootstrap/Card";

export default function MisProductos() {
    const { productos, usuarioActual } = useContext(Context);

    // Filtra los productos para mostrar solo los del usuario actual
    const misProductos = productos.filter((producto) => producto.userId === usuarioActual);

    return (
        <div>
            <h1>Mis Productos</h1>
            <div className="productoS">
                {productos.map((producto) => {
                    return (
                        <Card key={producto.id} style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={producto.img} className="imgCard" />
                            <Card.Body>
                                <Card.Title className="titles">{producto.name}</Card.Title>
                                <hr />
                                <dl>
                                    <dt>Detalles del Producto:</dt>
                                    <br />
                                    <Card.Text className="categoria">{producto.cat}</Card.Text>
                                    <Card.Text className="estado">{producto.stat}</Card.Text>
                                </dl>
                                <hr />
                                <Card.Text className="prices">
                                    <strong> $ {producto.price.toLocaleString()} </strong>
                                </Card.Text>
                                <div className="botones">
                                    <button className="btnOne" onClick={verDetalle} id={producto.id}>Ver Más 👀</button>
                                    <button className="btnTwo" onClick={() => agregarAlCarrito(producto)} id={producto.id}>Añadir 🛒</button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
