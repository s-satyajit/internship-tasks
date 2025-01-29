import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import DisplayProduct from "./pages/DisplayProducts"
import Cart from './pages/Cart'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DisplayProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default App
