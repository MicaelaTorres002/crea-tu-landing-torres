import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
    console.log(producto)
    return (
       <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img}/>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>${producto.precio},00</Card.Text>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    )
}

export default Item