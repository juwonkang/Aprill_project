import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit-react'
import './App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Footter from './components/footter'

const App = () => {
  const [items, setItems] = useState([])
  const [typeItKey, setTypeItKey] = useState(0)

  useEffect(() => {
    fetchItems()

    const interval = setInterval(() => {
      setTypeItKey((prevKey) => prevKey + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/items')
      setItems(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="app">
        <section className="container1">
          <div className="part1">
            <TypeIt
              key={typeItKey}
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              MY BAG
            </TypeIt>
          </div>
          <div className="part2">
            <TypeIt
              key={typeItKey}
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              ONE
            </TypeIt>
          </div>
          <div className="part3">
            <TypeIt
              key={typeItKey}
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              ONLY
            </TypeIt>
          </div>
        </section>
        <section className="container2">
          <div className="maintext1">
            <Link to="/shoppage">
              <button className="btn" type="button">
                바로 보러가기 ___
              </button>
            </Link>
          </div>
        </section>
        <section className="container3" style={{ overflowY: 'auto' }}>
          {/* container3 내용 */}
        </section>
      </div>
    </>
  )
}

export default App
