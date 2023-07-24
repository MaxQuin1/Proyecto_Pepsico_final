import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-[#242424] dark:text-white   text-black fixed mb-0 top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            <Link to={"/"}>
              <span className="text-black dark:text-white"><img src={"/src/image/logo.png"} className="w-100% h-12 object-cover rounded-xl"/></span>
            </Link>
          </h1>
        </div>
        
        <div className="flex flex-row">
          <div className="flex flex-row items-center justify-center border-2 p-2 rounded-3xl gap-2">
            <div className="pl-2 flex items-center justify-center">
            <box-icon name="search" color="gray"></box-icon>
            </div>
            <input
              className="bg-white outline-none dark:bg-[#242424] dark:text-white] py-1"
              type="search"
              placeholder="Buscar"
            ></input>
          </div>
          <div className="flex flex-row items-center px-4 gap-4">
          <box-icon name="user-circle"></box-icon>
            <li><Link to={"/login"}><span className="text-black dark:text-white">Ingresa</span></Link></li>
            <li></li>
            
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}