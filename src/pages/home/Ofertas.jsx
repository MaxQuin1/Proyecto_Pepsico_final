import { Link } from "react-router-dom";
import CardMarcas from "../../components/CardMarcas";
import Navbar2 from "../../components/Navbar2";
import "boxicons";
import CardProductos from "../../components/CardProductos";
import Footer from "../../components/Footer";

export default function Ofertas (){
    return(
      <div className="">
        <Navbar2></Navbar2>
        <div className="bg-fondo bg-blue-500 p-15 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
          <h1>PEPSICO</h1>
          <button className="bg-gray-100"><Link to ={"/nuevoslanzamientos"}>Nuevos lanzamientos</Link></button>
        </div>
        <Footer></Footer>
      </div>
    );
  }