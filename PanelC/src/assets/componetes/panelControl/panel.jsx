import Sidebar from "../sidebar/sidebar"
import Topbar from "../topbar/topbar"
import"./panel.css"

function Panel() {

  return (
    <>
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <div className="other">other pago</div>
        </div>
        </div>

    </>
  )
}

export default Panel