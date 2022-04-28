import { useEffect, useState } from "react"
import { get } from "axios"

const useFetch = (endpoint) => {
   const [data, setData] = useState()
   const [error, setError] = useState()

   /*useEffect(() => {
      fetch(`${process.env.REACT_APP_URL_API}${endpoint}`)
         .then(response => response.json()) //convierte la rspuesta a formato json, axios no lo necesita
         .then(data => setData(data)) //esta es la respuesta
         .catch(e => console.log(e))
   },[endpoint])*/

   //Ahora con axios es más sencillo
   useEffect(() => {
      get(`${process.env.REACT_APP_URL_API}${endpoint}`)
       //destrucrutamos data ({data}), para no hacerlo así .then(data => setCupcakes(data.data)) el .data viene de axios
      .then(({data}) => setData(data))
      .catch(err => setError(err))
   }, [endpoint])

   return [data, error]
}

export default useFetch