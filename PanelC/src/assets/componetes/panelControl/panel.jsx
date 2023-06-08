import React from "react";
import Sidebar from "../sidebar/sidebar"
import Analisis from "../../paginas/analisi/analisis"
import Topbar from "../topbar/topbar"
import Menu from "../../paginas/Menu"
import"./panel.css"

function Panel() {

  return (
    <>
      
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Menu/>
          <Analisis/>
        </div>

    </>
  )
}

export default Panel;