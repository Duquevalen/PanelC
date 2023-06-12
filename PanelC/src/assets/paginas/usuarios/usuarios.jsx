import { useFetch } from "../../../useFetch"
import "./usuarios.css"

 function Usuarios() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products')
  

  return (
    <div className='Usuarios'>
      usuariossssss
      <div className="card">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {data?.map((user)=>(
          <li key={user.id}>{user.title}{user.price}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Usuarios
