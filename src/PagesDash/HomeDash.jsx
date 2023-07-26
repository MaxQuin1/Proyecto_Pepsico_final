import NavDash from '../components/NavDash';
import CardLayout from '../components/CardLayout'


export default function HomeDash() {
    return (
        <div>
            <NavDash></NavDash>
            <div>
                <div >
                    <div className="ml-[15%] grid grid-cols-3 flex-row gap-4 pt-8 max-w-6xl m-auto">
                    <div className="">
                        <CardLayout
                            ruta={"/marcasdash"}
                            imagen={"https://www.pepsico.com.mx/images/librariesprovider20/acerca-de-nosotros/07.jpg?sfvrsn=d5b87e42_0"}
                            nombre={"Editar marcas"} />
                    </div>
                    <div className="">
                        <CardLayout
                            ruta={"/clientesdash"}
                            imagen={"https://cdn-icons-png.flaticon.com/512/356/356487.png"}
                            nombre={"Editar marcas"} />
                    </div>
                    <div className="">
                        <CardLayout
                            ruta={"/productosdash"}
                            imagen={"https://cdn-icons-png.flaticon.com/512/1044/1044967.png"}
                            nombre={"Editar marcas"} />
                    </div>
                    <div className="">
                        <CardLayout
                            ruta={"/pedidosdash"}
                            imagen={"https://cdn.icon-icons.com/icons2/37/PNG/512/package_3429.png"}
                            nombre={"Editar marcas"} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}