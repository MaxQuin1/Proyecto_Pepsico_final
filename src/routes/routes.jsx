import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import NuestrasMarcas from "../pages/home/NuestrasMarcas";
import Ofertas from "../pages/home/Ofertas";
import Bebidas from "../pages/home/Bebidas";
import Alimentos from "../pages/home/Alimentos";
import AcercaDe from "../pages/home/Acercade";
import Error from "../pages/error/error";
import Navbar from "../components/Navbar";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import HomeDash from '../PagesDash/HomeDash';
import MarcasDash from "../PagesDash/MarcasDash";
import ClientesDash from "../PagesDash/ClientesDash";
import CategoriasDash from "../PagesDash/CategoriasDash";
import ProductosDash from "../PagesDash/ProductosDash";
import Productos from '../pages/catalogs/productos';
import AddProductos from '../pages/catalogsDash/addProducts'
import PedidosDash from "../PagesDash/PedidosDash";
import CardProducto from "../components/CardProducto";
import AddMarcas from '../pages/catalogsDash/addMarcas'
import AddPedidos from "../pages/catalogsDash/addPedidos";

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
        path: "acercade",
        element: <AcercaDe />,
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
      {
        path: "ofertas",
        element: <Ofertas/>
      },
      {
        path: "bebidas",
        element: <Bebidas/>
      },
      {
        path: "alimentos",
        element: <Alimentos/>
      },
      //productos rutas
      {
        path: "productos",  
        element: <Productos />,
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
      {
        path: "clientesdash",  
        element: <ClientesDash/>,
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