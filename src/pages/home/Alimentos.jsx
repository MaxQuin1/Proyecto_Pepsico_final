import { Link } from "react-router-dom";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import CardProductos from "../../components/CardProductos";

export default function Alimentos() {
  const nombre = 'galleta';
  const [alimentos, setAlimentos] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3001/busquedas/nombre/"+ nombre)
      .then(function (datos) {
        setAlimentos(datos.data);
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
          {alimentos.map(function (alimento) {
            return (
              <CardProductos
                key={alimento.index}
                index={alimento.id_producto}
                imagen={alimento.imagen}
                nombre={alimento.nombre}
                descripcion={alimento.descripcion}
                precio={alimento.precio}
                marca={alimento.marca}
              />
            );
          })}
        </div>
        <Footer></Footer>
      </>
    </div>
  );
}