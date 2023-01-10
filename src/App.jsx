import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ResidentCard from './componets/ResidentCard'
import header from './assets/img/header.png';
import loading from './assets/gif/loading.gif'

function App() {
  const [location, setLocation] = useState({})
  const [searchId, setSearchId] = useState("")
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126)
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data))
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
      
  }, [])  

  console.log(location)

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId} `)
      .then((res) => setLocation(res.data))
  }

  return (
    <div >

      {
        isLoading ? (
          <img src={loading} alt="" className='loading'/>
        ) : (
          <div>
            <img src={header} alt="" />

            <div className='search_bar'>
              <input
                type="text"
                placeholder='Type a location ID'
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
              />
              <button onClick={searchLocation}>Search location</button>
            </div>

            <div className='location_data_container'>
              <div>
                <p>Nombre:</p>
                <p className='data'>{location.name}</p>
              </div>
              <div>
                <p>Tipo:</p>
                <p className='data'>{location.type}</p>
              </div>
              <div>
                <p>Dimension:</p>
                <p className='data'>{location.dimension}</p>
              </div>
              <div>
                <p>Poblacion:</p>
                <p className='data'>{location.residents?.length}</p>
              </div>

            </div>

            <ul>
              {
                location.residents?.map(url => (
                  <ResidentCard
                    url={url}
                    key={url} />
                ))
              }
            </ul>
          </div>
        )
      }

    </div>
  )
}

export default App
