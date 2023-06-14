import { useFetch } from "../../../useFetch"
import Progreso from "../../componetes/progreso/progreso"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./productos.css"

 function Productos() {
  const {data, loading, error} = useFetch('https://fakestoreapi.com/products')
  

  return (
    <div className='productos'>
      <div className="card">
          {error && <li>Error: {error}</li>}
          {loading && <Progreso/>}
          {data?.map((product)=>(
            
            <div className="sepa">
             <Card sx={{ maxWidth: 270 }}>
             <CardActionArea>
               <CardMedia
                 component="img"
                 height="140"
                 image={product.image}
                 
               />
               <CardContent>
                 <Typography gutterBottom variant="h6" component="div">
                   {product.title}
                 </Typography>
                 <Typography variant="" color="text.secondary">
                  {product.description}
                 </Typography>
               </CardContent>
             </CardActionArea>
             <CardActions>
               <Button size="small" color="primary">
                 {product.price}
               </Button>
             </CardActions>
           </Card>
           </div>
          ))}
        
      </div>
    </div>
  )
}
export default Productos
