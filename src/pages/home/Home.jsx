import { Link } from "react-router-dom";
import CardMarcas from "../../components/CardMarcas";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import CardProductos from "../../components/CardProductos";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [marcas, setMarcas] = useState([]);
  useEffect(function () {
    axios
      .get("http://localhost:3001/marcas")
      .then(function (datos) {
        setMarcas(datos.data);
      })
      .catch(() => {
        console.error("tenemos un problema");
      });
  }, []);
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
      <Navbar2></Navbar2>
      <Link to="/products">
        <div className=" bg-fondo bg-blue-400 p-0 flex flex-col items-center justify-center gap-4 rounded-2xl h-[29em] max-w-100xl m-auto"></div>
      </Link>
      <h1 className="text-center mt-9">Marcas</h1>
      <div className="grid grid-cols-5 my-8 mb-24 mx-10 border-none px-6 w-[100%]">
        {marcas.map(function (marca) {
          return <CardMarcas key={marca.index} imagen={marca.imagen} />;
        })}
      </div>
      <Link to="../catalogs/products">
        <div className="bg-fondo1 p-0 flex flex-col items-center justify-center h-[26rem] max-w-100xl m-auto">
          <div className="max-w-6xl mt-80 p-0">
            <h1 className="text-20xl text-white ">
              Compra los mejores productos para tu negocio
            </h1>
          </div>
        </div>
      </Link>
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
      <Footer />
    </div>
  );
}