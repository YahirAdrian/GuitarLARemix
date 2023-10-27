import { getGuitarras } from "../models/guitarras.server"
import { Outlet, useOutletContext } from '@remix-run/react'
import Styles from '~/styles/guitarra.css'
import ListadoGuitarras from "../components/listado-guitarras"

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: Styles
    }
  ]
}


function Tienda() {


  return (
    <div>
      <main className="contenedor">
        <Outlet 
          context={useOutletContext()}
        />
      </main>
    </div>
  )
}

export default Tienda
