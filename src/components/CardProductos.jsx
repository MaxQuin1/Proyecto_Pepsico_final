import { Link } from "react-router-dom";

export default function CardProductos({index, imagen, nombre, descripcion, precio, marca}){
    return(
        <div className="bg-white flex flex-col items-center rounded-3xl border border-indigo-900 p-2">
            <Link to={"/producto/" + index}>
                <img src={imagen} className="w-30 h-30 object-cover rounded-xl"/>
                <div className="items items-center justify-center place-content-cente text-center">
                    <h1 className="text-center text-xl text-black">{nombre}</h1>
                    <p className="text-center text-black">${precio}</p>
                    <h3 className="text-center text-xl text-black">{marca}</h3>
                </div>
            </Link>
        </div>
    );
}