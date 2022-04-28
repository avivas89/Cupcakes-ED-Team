import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import Cupcackes from "./pages/cupcakes";
import AboutUs from "./pages/aboutUs";
import { Routes, Route} from "react-router-dom";



const App = () => (  
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="cupcakes" element={<Cupcackes title peticion="cupcakes"/>} />
        <Route path="about-us" element={<AboutUs/>} />
      </Route>  
    </Routes> 
)

export default App;
