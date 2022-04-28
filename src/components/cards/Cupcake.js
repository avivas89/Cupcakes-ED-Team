import {number, string} from "prop-types"
import { useState} from 'react'
import useFetch from "../../hooks/useFetch"
import { put } from "axios"

const Cupcake = ({id, descripcion, sabor, color, precio, imagen, estaVendido}) => {

   const [cupcake] = useFetch(`cupcakes?id=${id}`)
   const [vendido, setVendido] = useState(estaVendido)
   
   const vender = () => {
      if(cupcake[0]) {
         cupcake[0].estaVendido = true
         setVendido(true)
      }      

      put(`${process.env.REACT_APP_URL_API}cupcakes/${id}`, cupcake[0])
         .then(response => setVendido(response.data))
         .catch(e => console.log(e))
   }

   

   return (
      <div className="s-radius-1 s-shadow-bottom s-mb-0 s-relative card background s-shadow-card-micro white-color nowrap s-column">
         <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img  src={imagen} alt={sabor} />
         </div>
         <div className="card__data s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{descripcion}</h3>
            <div className="s-main-center">
               <span className="small">Color: {color}</span>
            </div>
            <div className="s-main-center">
               <span className="button dark-color" href="#">$ {precio}USD</span>
            </div>
            {
            !vendido && <button onClick={vender}>Vender</button>
            }
         </div>
      </div>
   )
}

Cupcake.propTypes = {
   precio: number,
   color: string.isRequired,
   imagen: string,
   descripcion: string.isRequired,
   sabor: string.isRequired
}

Cupcake.defaultProps = {
   imagen: "https://cdn.pixabay.com/photo/2012/04/13/12/19/pastries-32164_960_720.png",
   precio: 0
}

export default Cupcake