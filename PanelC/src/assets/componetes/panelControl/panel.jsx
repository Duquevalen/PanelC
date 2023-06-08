import Sidebar from "../sidebar/sidebar"
import Topbar from "../topbar/topbar"
import Menu from "../../paginas/Menu"
import"./panel.css"

function Panel() {

  return (
    <>
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Menu/>
        </div>
        </div>

    </>
  )
}

export default Panel