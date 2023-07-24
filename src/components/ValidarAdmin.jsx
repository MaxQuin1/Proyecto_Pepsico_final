import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';

export default function ValidarAdmin() {
    const [administradores, setAdministradores] = useState([]);

  useEffect(function () {
    axios
      .get("http://localhost:3001/administradores")
      .then(function (datos) {
        setAdministradores(datos.data);
      })
      .catch(() => {
        console.error("tenemos un problema");
      });
  }, []);
  const validCredentials = {
    username: '{administradores.nombre}',
    password: '{administradores.password}'};
  return (
    <div>
        <>

        </>
    </div>
  )
}