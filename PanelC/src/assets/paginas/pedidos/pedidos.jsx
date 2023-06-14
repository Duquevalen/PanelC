import { useFetch } from "../../../useFetch"
import "./pedidos.css"
import Progreso from "../../componetes/progreso/progreso"

function Pedidos() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/carts/5')
  

  return (
    <div className='pedidos'>
      {error && <li>Error: {error}</li>}
      {loading && <Progreso/>}
      {data?.map((pedidos)=>(
        <li>{pedidos.id}</li>
      ))}

    </div>
  )
}
export default Pedidos
