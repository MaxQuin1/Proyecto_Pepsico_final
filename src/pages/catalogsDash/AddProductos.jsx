import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react';

export default function AddProductos() {
  // const[formulario,setFormulario] = useState({
  //   nombre:'',
  //   descripcion:'',
  //   precio:'',
  //   marca:'',
  //   imagen:''
  // })

  // const handleChange = function (e) {
  //   setFormulario({
  //     ...formulario,
  //     [e.target.name]:e.target.value,
  //   });
  // }
  // const handleSubmit = function (e) {
  //   e.preventDefault();
  //   const producto = JSON.stringify(formulario);
  //   console.log(producto)
  //   Axios.post('http://localhost:3001/productos',producto,{
  //     Headers:{
  //       'content-Type':'application/json'
  //     }
  //   }).then(function(){
  //     console.log('producto agregado')
  //   }
  //   ).catch(function(){
  //     console.error('error al agregar el producto')
  //   })
  //  }
  // return (
  //   <div>
  //     <>
  //     <h1>Agregar producto</h1>
  //     <form>
  //     <label>Nombre</label>
  //     <input type='text' name='nombre' placeholder='nombre del producto' onChange={handleChange}></input>
  //     <label>Descripcion</label>
  //     <input type='text' name='descripcion' placeholder='descripcion del producto' onChange={handleChange}></input>
  //     <label>Precio del prodcuto</label>
  //     <input type='number' name='precio' placeholder='precio del producto' onChange={handleChange}></input>
  //     <label>La marca del producto</label>
  //     <input type='text' name='marca' placeholder='marca del producto' onChange={handleChange}></input>
  //     <label>URL de la imagen</label>
  //     <input type='text' name='imagen' placeholder='marca del producto' onChange={handleChange}></input>
  //     <button type='submit'>Agregar</button>
  //     </form>
  //     </>
  //   </div>
  //)
}