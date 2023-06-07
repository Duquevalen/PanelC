import "./sidebar.css"
import {LineStyle,Timeline,TrendingUp} from "@mui/icons-material"

export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">panel de control</h3>
            <ul className="sidebarList">
                <li className="sidebarLisItem">
                  <LineStyle/>
                  Menu
                </li>
                <li className="sidebarLisItem">
                 <Timeline/>
                    Analisis
               </li>
               <li className="sidebarLisItem">
                 <TrendingUp/>
                  Ingresos
              </li>
            </ul>
        </div>
        <div className="sidebarMenu">
    <h3 className="sidebarTitle">panel de control</h3>
    <ul className="sidebarList">
        <li className="sidebarLisItem">
          <LineStyle/>
          Menu
        </li>
        <li className="sidebarLisItem">
         <Timeline/>
            Analisis
       </li>
       <li className="sidebarLisItem">
         <TrendingUp/>
          Ingresos
      </li>
    </ul>
</div>
    </div>
    </div>
  )
}
