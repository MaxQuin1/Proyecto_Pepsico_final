import { Link, Outlet } from "react-router-dom";

export default function NavDash() {
  return (
    <>
      <div className="fixed container">
        <aside
          id="sidebar-multi-level-sidebar"
          className="fixed top-[15%] left-0 h-[80%] z-40 w-[200px] transition-transform -translate-x-full sm:translate-x-0 "
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-900 border rounded-xl border-indigo-800">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="/homedash"
                  className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <box-icon name='bar-chart-square' type='solid' rotate='90' color='#0053A5' ></box-icon>
                  <span className="ml-3">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/marcasdash"
                  className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <box-icon name='badge' type='solid' rotate='90' color='#0053A5' ></box-icon>
                  <span className="flex-1 ml-3 whitespace-nowrap">Marcas</span>
                </a>
              </li>
              <li>
                <a
                  href="/clientesdash"
                  className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <box-icon name='id-card' color='#0053A5'></box-icon>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {" "}
                    Clientes{" "}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="productosdash"
                  className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <box-icon type='solid' name='shopping-bags' color='#0053A5'></box-icon>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Productos
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="pedidosdash"
                  className="flex items-center p-2 text-blue-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group"
                >
                  <box-icon type="solid" name="memory-card" color='#0053A5'></box-icon>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Pedidos
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}
