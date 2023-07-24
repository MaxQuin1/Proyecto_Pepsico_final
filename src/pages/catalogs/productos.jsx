import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Productos() {

    const [productos, setProductos] = useState ([]);

    useEffect(function() {
        axios.get('http://localhost:3001/productos')
        .then(function(datos) {
            setProductos(datos.data);
        })
        .catch(() => {
            console.error('tenemos un problema');
        });
    },[]);

    return (
        <div>
            <h1>Producto</h1>
            {}
        </div>
    )
}