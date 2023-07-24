import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center mb-20 mt-0">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-black">Registrate</h1>
        <p className="text-xl">Crea una cuenta para empezar a comprar</p>
        <span>
          <Link to={"/"}>Regresar al inicio</Link>
        </span>
      </div>

      <form className="flex flex-col gap-2 mt-8">
        <div className="flex flex-col">
          <label className="text-black mb-2">Nombre</label>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
            <box-icon name="user" color="gray"></box-icon>
            <input
              className="border-none outline-none rounded-md"
              type="text"
              placeholder="Nombre"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black mb-2">Correo electrónico</label>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
            <box-icon name="envelope" color="gray"></box-icon>
            <input
              className="border-none outline-none rounded-md"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-black mb-2">Contraseña</label>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md">
            <box-icon name="lock" color="gray"></box-icon>
            <input
              name="password"
              className="border-none outline-none rounded-md"
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-2 border-2 px-4 rounded-md mt-2">
            <box-icon name="lock" color="gray"></box-icon>
            <input
            name="password-confirm"
              className="border-none outline-none rounded-md"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>
        </div>
        <button className="bg-black text-white rounded-md py-2 mt-2">
          Registrate
        </button>
      </form>
      <p className="mt-4 font-bold">
        ¿Ya tienes cuenta?{" "}
        <Link to={"/login"} className="text-blue-700">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
