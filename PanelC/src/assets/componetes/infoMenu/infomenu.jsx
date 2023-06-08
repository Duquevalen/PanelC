import "./infoMenu.css"
import {CardGiftcard} from "@mui/icons-material";

export default function Infomenu() {
  return (
    <div>
        <span className="titulo">Conoce mas sobre duqueza🛍️</span>
        <div className="info">
            <div className="infoItem">
                <span className="infoTitle">Maquillaje</span>
                <img className="imagenn" src="https://images.unsplash.com/photo-1610545936431-9983d41e52b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
                <div className="infoContainer">
                    <sapn className="infoProduc">Todo en maquillaje
                    <CardGiftcard/>
                    </sapn>
                </div>
            </div>
            <div className="infoItem">
                 <span className="infoTitle">Productos de uñas</span>
                 <img className="imagenn" src="https://images.unsplash.com/photo-1542273086-ac11130c6126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80" />
                   <div className="infoContainer">
                     <sapn className="infoProduc">Para manucure y pedicure
                     <CardGiftcard/>
                    </sapn>
               </div>
          </div>
          <div className="infoItem">
         <span className="infoTitle">Cuidado de la piel</span>
         <img className="imagenn" src="https://images.unsplash.com/photo-1631292621942-de5582ec1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
           <div className="infoContainer">
             <sapn className="infoProduc">Mejora tu apariencia
             <CardGiftcard/>
            </sapn>
       </div>
       </div>
        </div>
      
    </div>
  )
}
