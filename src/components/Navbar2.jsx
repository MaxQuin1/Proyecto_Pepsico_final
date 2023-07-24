import { Link } from "react-router-dom"
export default function Navbar2 (){
    return(
        <>
        <div className="bg-white text-black dark:bg-[#242424] dark:text-white   fixed left-0 top-12 mt-7 w-full flex flex-row justify-between px-20 py-4 items-center">
            <ul className="flex flex-row gap-40 items-center">
            <li><Link to={"/nuestrasmarcas"}><span className="text-black ">Nuestras Marcas</span></Link></li>
            <li><Link to={"/bebidas"}><span className="text-black ">Bebidas</span></Link></li>
            <li><Link to={"/alimentos"}><span className="text-black ">Alimentos</span></Link></li>
            <li><Link to={"/ofertas"}><span className="text-black ">Ofertas</span></Link></li>
            <li><Link to={"/nuevoslanzamientos"}><span className="text-black ">Nuevos lanzamientos</span></Link></li>
            </ul>
        </div>
        </>
    )
}