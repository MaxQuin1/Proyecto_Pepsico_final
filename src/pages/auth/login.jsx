import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail ] = useState('')
  const [password, setPassword ] = useState('')
  const Login = async () =>{
  const response = await axios.post("http://localhost:3001/login",{
  email: email,
  password: password
  });
  console.log(response.data)
  if(response.data.status == true){
  //location.href = '/'
  if(response.data.respuesta[0].role == "cliente"){
  location.href = '/'
  }
  if(response.data.respuesta[0].role == "admin"){
  location.href = ''
  }
  }
  }
  return (
    <div className="flex flex-col items-center justify-center">
    <div className="text-center">
    <h1 className="text-4xl font-semibold text-black">Bienvenido</h1>
    <p className="text-xl">Inicia sesión para continuar</p>
    <span className="mt-2">
    <Link to={"/"} className="text-blue-700">
    Regresar al inicio
    </Link>
    </span>
    </div>
    <div className="flex flex-col gap-4 mt-8 w-80">
    <div className="flex flex-col">
    <label className="text-black mb-2">Correo electrónico</label>
    <div className="flex items-center border rounded-md px-4 py-2">
    <box-icon name="envelope" color="gray"></box-icon>
    <input
    className="flex-1 ml-2 bg-transparent border-none outlin-none"
    type="text"
    placeholder="Correo electrónico"
    value={email}
    onChange={(event)=>{
    //console.log('ha cambiado el valor....', 
    (event.target.value)
    setEmail(event.target.value)
    }}/>
    </div>
    </div>
    <div className="flex flex-col">
    <label className="text-black mb-2">Contraseña</label>
    <div className="flex items-center border rounded-md px-4 py-2">
    <box-icon name="lock" color="gray"></box-icon>
    <input
    className="flex-1 ml-2 bg-transparent border-none outlin-none"
    type="password"
    placeholder="Contraseña"
    value={password}
    onChange={(event)=>{
    setPassword(event.target.value)
    }}
    />
    </div>
    </div>
    <button className="bg-black text-white rounded-md py-2 mt-4"
    onClick={Login}
    type="button"
    >
    Iniciar sesión
    </button>
    </div>
    <p className="mt-4 font-bold">
    ¿No tienes cuenta?{" "}
    <Link to={"/register"} className="text-blue-700">
    Registrate
    </Link>
    </p>
    </div>
    );
  }    