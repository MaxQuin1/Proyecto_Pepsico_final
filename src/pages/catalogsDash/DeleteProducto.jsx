import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteProducto() {
  const index = window.location.href.split("/")[4];

  const DeleteConfirmationForm = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDelete = () => {
      alert("El elemento ha sido eliminado.");
      window.location.href = "/productosdash"
    };
    
    const handleCancelDelete = () => {
      setShowConfirmation(false);
      window.location.href = "/productosdash"
    };

    return (
      <div>
        <h2>Eliminar Elemento</h2>
        <button onClick={() => setShowConfirmation(true)}>Eliminar</button>

        {showConfirmation && (
          <div>
            <p>¿Estás seguro que deseas eliminar este producto?</p>
            <button onClick={handleDelete}>Sí, eliminar</button>
            <button onClick={handleCancelDelete}>Cancelar</button>
          </div>
        )}
      </div>
    );
  };

  const [productos, setProductos] = useState([]);
  useEffect(
    function () {
      axios
        .delete("http://localhost:3001/productos/" + index)
        .then(function (datos) {
            console.log(index)
          setProductos(datos.data);
        })
        .catch(() => {
          console.error("tenemos un problema");
        });
    },
    []
  );

  return (
    <div>
      <DeleteConfirmationForm />
    </div>
  );
}