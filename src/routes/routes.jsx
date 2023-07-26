import { createBrowserRouter } from "react-router-dom";
// home
import Navbar from "../components/Navbar";
import Home from "../pages/home/Home";
import HomeDash from '../pagesDash/HomeDash';
import Alimentos from "../pages/home/Alimentos";
import Bebidas from "../pages/home/Bebidas";
import Ofertas from "../pages/home/Ofertas";
// cuentas
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
// productos
import Productos from "../pages/home/Productos";
import CardProducto from "../components/CardProducto";
import ProductosDash from "../pagesDash/ProductosDash";
import AddProductos from '../pages/catalogsDash/AddProductos'
import UpdateProductos from "../pages/catalogsDash/UpdateProductos";
import DeleteProducto from "../pages/catalogsDash/DeleteProducto";
// marcas
import NuestrasMarcas from "../pages/home/NuestrasMarcas";
import MarcasDash from "../pagesDash/MarcasDash";
import AddMarcas from '../pages/catalogsDash/AddMarcas';
// pedidos
import PedidosDash from "../pagesDash/PedidosDash";
import AddPedidos from "../pages/catalogsDash/AddPedidos";
// clientes
import ClientesDash from "../pagesDash/ClientesDash";
// categorias
import CategoriasDash from "../pagesDash/CategoriasDash";

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
        path: "updateproductos/:key",  
        element: <UpdateProductos/>,
      },
      {
        path: "deleteproductos/:key",  
        element: <DeleteProducto/>,
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