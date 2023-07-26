import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function UpdateProductos() {
  const index = window.location.href.split("/")[4];

  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    id_marca: undefined,
    imagen: "",
  });

  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/productos/" + index)
      .then((dato) => {
        const info = dato.data;
        setFormulario({
          nombre: info.nombre,
          descripcion: info.descripcion,
          precio: info.precio,
          id_marca: info.marca,
          imagen: info.imagen, //
        });
      })
      .catch((error) => {
        console.error("Error al obtener los datos del producto", error);
      });

    axios
      .get("http://localhost:3001/marcas")
      .then((response) => {
        setMarcas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las marcas", error);
      });
  }, [index]);

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    const producto = JSON.stringify(formulario);
    console.log(producto);
    axios
      .put("http://localhost:3001/productos/" + index, producto, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        console.log("Producto actualizado");
        // Redirigir a la página de productos después de actualizar
        window.location.href = "/productosdash";
      })
      .catch((error) => {
        console.error("Error al actualizar el producto", error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 lg:w-2/1">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">
                Actualizar producto
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6">
                <Form>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="nombre"
                      placeholder="nombre del producto"
                      onChange={handleChange}
                      value={formulario.nombre}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                      type="text"
                      name="descripcion"
                      placeholder="descripcion del producto"
                      onChange={handleChange}
                      value={formulario.descripcion}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                      type="number"
                      name="precio"
                      placeholder="precio del producto"
                      onChange={handleChange}
                      value={formulario.precio}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="id_marca">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                      as="select"
                      name="marca"
                      placeholder="marca del producto"
                      onChange={handleChange}
                      value={formulario.marca}
                    >
                      <option value="">Seleccionar marca</option>
                      {marcas.map((marca) => (
                        <option key={marca.id_marca} value={marca.id_marca}>
                          {marca.nombre}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="imagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                      type="text"
                      name="imagen"
                      placeholder="Imagen del producto"
                      onChange={handleChange}
                      value={formulario.imagen}
                    />
                  </Form.Group>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Actualizar
                    </button>
                    <Link
                      to="/productosdash"
                      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                    >
                      Volver
                    </Link>
                  </div>
                </Form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
