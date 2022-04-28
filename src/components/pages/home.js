import Banner from "../sections/Banner"
import Servicios from "../sections/Servicios"
import Cupcackes from "./cupcakes"

const Home = () => (
  <>
    <Banner/>
    <Cupcackes peticion="cupcakes?sabor_like=fresa"/>
    <Servicios peticion="servicios"/>
  </>
)

export default Home