import React, {useEffect, useState} from 'react';
import api from './api/info';
import Interface from './components/CalcInter';



export default function App () {
  const [info, setInfo] = useState([])


  useEffect(() => {
    const fecthInfo = async () => {
      try {
        const response = await api.get('/elements')
        setInfo(response.data)
      } catch (err) {
        if (err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fecthInfo()
  }, [])

    return (
      <main>
          <Interface info={info}/>
      </main>
    )
}