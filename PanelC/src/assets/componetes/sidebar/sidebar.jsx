import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,Person,Storefront,AttachMoney,ChecklistRtl,Report,ManageSearch} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Panel de control</h3>
            <ul className="sidebarList">
                <li className="sidebarLisItem active">
                  <LineStyle className="sidebarIcon"/>
                  Menu
                </li>
                <li className="sidebarLisItem">
                 <Timeline className="sidebarIcon"/>
                    Analisis
               </li>
               <li className="sidebarLisItem">
                 <TrendingUp className="sidebarIcon"/>
                  Ingresos
              </li>
                <li className="sidebarLisItem">
                 <Storefront className="sidebarIcon"/>
                 Productos
              </li>
              <li className="sidebarLisItem">
                <Person className="sidebarIcon"/>
                 Usuarios
            </li>
             <li className="sidebarLisItem">
               <AttachMoney className="sidebarIcon"/>
                Precios
           </li>
           <li className="sidebarLisItem">
             <ChecklistRtl className="sidebarIcon"/>
              Pedidos
         </li>
            </ul>
        </div>
  <div className="sidebarMenu">
      <h3 className="sidebarTitle">Personal</h3>
      <ul className="sidebarList">
          <li className="sidebarLisItem">
           <ManageSearch className="sidebarIcon"/>
              Administrar
         </li>
         <li className="sidebarLisItem">
           <Report className="sidebarIcon"/>
            Reportes
        </li>
      </ul>
  </div>
    </div>
    </div>
  )
}
