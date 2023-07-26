import React from 'react'
import NavDash from '../components/NavDash'
import axios from 'axios';
import { useEffect, useState } from "react";

export default function MarcasDash() {
  const [marcas, setMarcas] = useState([]);
  let c = 1;

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
      <>
      <NavDash />
        <h1 className="text-center text-4xl text-black">Marcas</h1>
        <div className="flex flex-row gap-[50%]">
          <div className="ml-[19%] mb-0 mt-5">
            <input
              className="border rounded-xl bg-white outline-none dark:bg-[#242424] dark:text-white] py-1"
              type="search"
              placeholder="Buscar marca"
            ></input>
          </div>
          <div className='flex justify-end w-[90%]'> 
            <a href="addmarcas">
              <button className="fixed bg-green-500 hover:bg-green-600 bottom-15 right-9 text-white text-3xl font-bold pt-1 pb-2 px-4 rounded-[100%]">
                +
              </button>
            </a>
          </div>
          </div>
        <div className="flex justify-center mt-5 mb-20 max-h-80 overflow-y-auto table-auto">
          <table className="ml-[14%] table-fixed border border-indigo-800">
            <thead className="">
              <tr className="bg-indigo-800">
                <th className="text-white">#</th>
                <th className="text-white"> Nombre</th>
                <th className="text-white"> Imagen</th>
                <th className="text-white"> Acciones</th>
              </tr>
            </thead>
            <tbody className="">
              {marcas.map((marca) => (
                <tr key={marca.index}>
                  <td className="px-4 py-2">{c++}</td>
                  <td className="px-4 py-2">{marca.nombre} </td>
                  <td className="w-40 px-4 py-2"> {marca.imagen} </td>
                  <td className="px-4 py-2">
                    <a href="updateproductos">
                      <button className="bg-yellow-400 hover:bg-yellow-600 text-white text-1xl font-bold py-2 px-4 mx-1">
                        Actualizar
                      </button>
                    </a>
                    <a href="eliminarproductos">
                      <button className="bg-red-400 hover:bg-red-600 text-white text-1xl font-bold py-2 px-4 mx-1">
                        Eliminar
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </> 
    </div>
    );
}