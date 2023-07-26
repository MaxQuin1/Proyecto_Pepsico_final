import { Link } from "react-router-dom"

export default function CardMarcas({imagen,titulo}){
  return(
    <Link href="https://www.pepsico.com.mx/">
      <div className="h-40 w-40" style={{background:`url(${imagen})`, object:`center`, backgroundSize: `cover`}}>
      </div>
      <h1 className="items-center text-3xl p-5 text-black">{titulo}</h1>
      </Link>
  )
}