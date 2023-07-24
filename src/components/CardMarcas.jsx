export default function CardMarcas({imagen}){
  return(
      <div className="h-40 w-40" style={{background:`url(${imagen})`, object:`center`, backgroundSize: `cover`}}>
      </div>
  )
}