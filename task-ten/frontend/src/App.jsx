import './App.css'
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    (async() => {
      try{
        const response = await axios.get('/api/products')
        console.log(response.data)
        setProducts(response.data)
        setLoading(false)
      } catch(error) {
        setLoading(false)
        setError(true)
      }
    })()
  }, [])

  if(loading) return <h1>Loading...</h1>

  if(error) {
    return <h1>Something went wrong!</h1>
  }

  return (
    <>
      <h1>API Handling in React</h1>
      <h2>Number of products are: {products.length}</h2>
    </>
  )
}

export default App
