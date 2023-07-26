import axios from "axios";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function AddProductos() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    id_marca: "",
    imagen: ""
  });

  const [marcas, setMarcas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/marcas")
      .then((response) => {
        setMarcas(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías", error);
      });
  }, []);

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
      .post("http://localhost:3001/productos", producto, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("Producto agregado");
      })
      .catch(function () {
        console.error("Error");
      });

    window.location.href = "/productosdash";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 lg:w-2/1">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b border-gray-300 text-left">Insertar producto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6">
                <Form>
                  <Form.Group className="mb-3" controlId="nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre del producto" name="nombre" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="descripcion">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Descripción del producto" name="descripcion" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Precio del producto" name="precio" onChange={handleChange} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="id_marca">
                    <Form.Label>marca</Form.Label>
                    <Form.Control as="select" name="id_marca" onChange={handleChange}>
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
                    <Form.Control type="text" placeholder="URL de la imagen del producto" name="imagen" onChange={handleChange} />
                  </Form.Group>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Enviar
                    </button>
                    <Link
                      to="/productosdash"
                      className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"> 
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