import React from "react";
import Navbar2 from "./Navbar2";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CardProducto() {
  const index = window.location.href.split("/")[4];
  const [producto, setProducto] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/productos/" + index)
      .then(function (datos) {
        console.log(datos.data);
        setProducto(datos.data);
      })
      .catch(() => {
        console.error("tenemos un problema");
      });
  },);
  return (
    <div>
      <>
        <Navbar2></Navbar2>
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-semibold mb-4">Ecommerce Store</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              <tr key={producto.index}>
                <p className="px-4 py-2">{producto.nombre} </p>
                <p className="px-4 py-2"> {producto.descripcion} </p>
                <p className="px-4 py-2"> {producto.precio} </p>
                <p className="px-4 py-2"> {producto.marca} </p>
                {producto.imagen}
              </tr>
          </div>
        </div>
      </>
    </div>
  );
}