import { createBrowserRouter } from "react-router-dom";
// home
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import HomeDash from '../PagesDash/HomeDash';
import Alimentos from "../pages/home/Alimentos";
import Bebidas from "../pages/home/Bebidas";
import Ofertas from "../pages/home/Ofertas";
import AcercaDe from "../pages/home/Acercade";
// cuentas
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// productos
import CardProductos from '../components/CardProductos';
import CardProducto from "../components/CardProducto";
import ProductosDash from "../PagesDash/ProductosDash";
import AddProductos from '../pages/catalogsDash/AddProductos'
// marcas
import NuestrasMarcas from "../pages/home/NuestrasMarcas";
import MarcasDash from "../PagesDash/MarcasDash";
import AddMarcas from '../pages/catalogsDash/AddMarcas';
// pedidos
import PedidosDash from "../PagesDash/PedidosDash";
import AddPedidos from "../pages/catalogsDash/AddPedidos";
// clientes
import ClientesDash from "../PagesDash/ClientesDash";
// categorias
import CategoriasDash from "../PagesDash/CategoriasDash";

import Error from "../pages/error/Error";

export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/homedash",  
        element: <HomeDash />,
      },
      {
        path: "alimentos",
        element: <Alimentos/>
      },
      {
        path: "bebidas",
        element: <Bebidas/>
      },
      {
        path: "ofertas",
        element: <Ofertas/>
      },
      {
        path: "acercade",
        element: <AcercaDe />,
      },
      //productos rutas
      {
        path: "productos",  
        element: <CardProductos />,
      },
      {
        path: "producto/:index",  
        element: <CardProducto />,
      },
      {
        path: "productosdash",  
        element: <ProductosDash/>,
      },
      {
        path: "addproductos",  
        element: <AddProductos/>,
      },
      // Rutas marcas
      {
        path: "nuestrasMarcas",
        element: <NuestrasMarcas/>
      },
      {
        path: "marcasdash",  
        element: <MarcasDash/>,
      },
      {
        path: "addmarcas",  
        element: <AddMarcas/>,
      },
      // Rutas pedidos
      {
        path: "pedidosdash",  
        element: <PedidosDash/>,
      },
      {
        path: "addpedidos",  
        element: <AddPedidos/>,
      },
      // clientes
      {
        path: "clientesdash",  
        element: <ClientesDash/>,
      },
      // categorias
      {
        path: "categoriasdash",  
        element: <CategoriasDash/>,
      },
    ],
  },
{
  path: "/login",
  element: <Login />,
},
{
  path: "/register",
  element: <Register />,
},
{
  path: "*",
  element: <Error />,
},
]);