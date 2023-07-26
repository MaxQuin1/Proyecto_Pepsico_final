import { Link } from "react-router-dom";
import CardMarcas from "../../components/CardMarcas";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

export default function NuestrasMarcas() {
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
  return (
    <div>
      <Navbar2></Navbar2>
      <div className="grid grid-cols-5 mt-[15%] mb-20 mx-10 border-none px-6 w-[100%]">
        {marcas.map(function (marca) {
          return <CardMarcas key={marca.index} imagen={marca.imagen} titulo={marca.nombre} />;
        })}

      </div>
      <Footer></Footer>
    </div>
  );
}