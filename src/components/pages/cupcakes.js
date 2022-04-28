import useFetch from "../../hooks/useFetch"
import Cupcake from "../cards/Cupcake"



const Cupcackes = ({peticion, title}) => {

   const [cupcakes, error] = useFetch(peticion)

   if(error) {
      return <span>Hubo un error</span>
   }
   return (
      <>
      {
         title && 
            <div className="topbar dark-color">         
                  <div className="ed-grid">
                     <p className="s-mb-1 m-mb-0 s-center m-left">Cupcakes</p>
                  </div> 
            </div>
       }
      <div className="l-block"></div>
      <div className="ed-grid">    
         {
         cupcakes ? (
            <section className="ed-grid s-grid-2 md-grid-3 lg-grid-4 gap-2 l-block row-gap">
            {
               cupcakes.map(({id, descripcion, sabor, color, precio, imagen, estaVendido}) => (
                  <Cupcake
                     key= {id}
                     id={id}
                     imagen={imagen}
                     descripcion= {descripcion}
                     sabor= {sabor}
                     color= {color}
                     precio= {precio}
                     estaVendido = {estaVendido}
                  />
               ))
            }
            </section>
         ) : (<span>Cargando...</span>)
         }
      </div>
      </>
   )
}

export default Cupcackes