import { Link } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProductos from "../../components/CardProductos";

export default function Bebidas() {
  const [productos, setProductos] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3001/productos")
      .then(function (datos) {
        setProductos(datos.data);
      })
      .catch(() => {
        console.error("tenemos un problema");
      });
  }, []);
  return (
    <div className="">
      <>
        <Navbar2></Navbar2>
        <div className="grid grid-cols-4 gap-8 mt-8 mx-10 p-10">
          {productos.map(function (producto) {
            return (
              <CardProductos
                key={producto.id}
                index={producto.id_producto}
                imagen={producto.imagen}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                marca={producto.marca}
              />
            );
          })}
        </div>
        <Footer></Footer>
      </>
    </div>
  );
}