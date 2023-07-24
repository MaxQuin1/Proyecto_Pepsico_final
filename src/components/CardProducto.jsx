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
  }, []);
  return (
    <div>
      <>
        <Navbar2></Navbar2>
        <div>
          <h1>{producto.nombre}</h1>;
          <aside
            id="sidebar-multi-level-sidebar"
            className="fixed top-[30%] left-0 h-[80%] z-40 w-[200px] transition-transform -translate-x-full sm:translate-x-0 "
            aria-label="Sidebar">
            <h4 className="text-center">Otros Sabores</h4>
          </aside>
        </div>
      </>
    </div>
  );
}