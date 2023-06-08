import { BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp,Person,Storefront,AttachMoney,ChecklistRtl,Report,ManageSearch} from "@mui/icons-material"
import Menu from "../../paginas/Menu";
import Analisis from "../../paginas/analisi/analisis";

export default function Sidebar() {
  return (
    <Router className="sidebar">
    
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Panel de control</h3>
            <ul className="sidebarList">
                <li className="sidebarLisItem active">
                  <LineStyle className="sidebarIcon"/>
                  <Link to="/">Menu</Link>
                </li>
                <li
                 className="sidebarLisItem">
                 <Timeline className="sidebarIcon"/>
                 <Link to="/Analisis">Analisis</Link>
               </li>
               <li className="sidebarLisItem">
                 <TrendingUp className="sidebarIcon"/>
                 <Link to="/Ingresos">Ingresos</Link>
              </li>
                <li className="sidebarLisItem">
                 <Storefront className="sidebarIcon"/>
                 <Link to="/Productos">Productos</Link>
              </li>
              <li className="sidebarLisItem">
                <Person className="sidebarIcon"/>
                <Link to="/Usuarios">Ususarios</Link>
            </li>
             <li className="sidebarLisItem">
               <AttachMoney className="sidebarIcon"/>
               <Link to="/Precios">Precios</Link>
           </li>
           <li className="sidebarLisItem">
             <ChecklistRtl className="sidebarIcon"/>
             <Link to="/Pedidos">Pedidos</Link>
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
    <Routes>
        	<Route path="/" element={<Menu />} />
        	<Route path="/Analisis" element={<Analisis />} />
        </Routes>
    </Router>
    
  )
}
