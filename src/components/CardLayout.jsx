import { Link } from "react-router-dom";

export default function CardLayout({ruta, imagen, nombre, descripcion, precio, marca}){
    return(
        <div className="bg-white flex flex-col items-center rounded-3xl border border-indigo-900 p-2">
            <Link to={ruta}>
                <img src={imagen} className="w-30 h-30 object-cover rounded-xl"/>
                <div className="items items-center justify-center place-content-cente text-center">
                </div>
            </Link>
        </div>
    );
}