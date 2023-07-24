import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-10">
      <div className="bg-[#141414] items-start justify-evenly gap-8 p-8 w-full bottom-0 flex flex-row py-36">
        <div className="text-white">
          <h3 className="text-2xl font-semibold">Acerca de</h3>
          <ul className="pt-6 flex flex-col gap-2">
            <li>
              <Link to={"/acercade"}>
                <span className="text-white">Quienes somos</span>
              </Link>
            </li>
            <li>Contáctanos</li>
          </ul>
        </div>
        <div className="text-white">
          <h3 className="text-2xl font-semibold">Tienda</h3>
          <ul className="pt-6 flex flex-col gap-2">
          <li><Link to={"/nuestrasmarcas"}><span className="text-white ">Nuestras Marcas</span></Link></li>
            <li><Link to={"/bebidas"}><span className="text-white ">Bebidas</span></Link></li>
            <li><Link to={"/alimentos"}><span className="text-white ">Alimentos</span></Link></li>
            <li><Link to={"/ofertas"}><span className="text-white ">Ofertas</span></Link></li>
            <li><Link to={"/nuevoslanzamientos"}><span className="text-white ">Nuevos lanzamientos</span></Link></li>
          </ul>
        </div>
        
        <div className="text-white">
          <h3 className="text-2xl font-semibold">Contáctanos</h3>
          <ul className="flex flex-row gap-4 pt-6">
            <li>
              <box-icon
                type="logo"
                name="facebook-circle"
                color="white"
              ></box-icon>
            </li>
            <li>
              <box-icon
                name="instagram-alt"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </li>
            <li>
              <box-icon name="twitter" type="logo" color="#ffffff"></box-icon>
            </li>
            <li>
              <box-icon name="tiktok" type="logo" color="#ffffff"></box-icon>
            </li>
          </ul>
          <div className="flex flex-row items-center justify-center pt-8">
            <input
              className="p-[0.6em_1.2em] rounded-[10px_0_0_10px] text-black"
              type="text"
              placeholder="Correo electrónico"
            />
            <button className="bg-black rounded-[0px_10px_10px_0]">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}