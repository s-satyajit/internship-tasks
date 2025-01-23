import React, {Suspense} from "react";
import './App.css'
const Lazy = React.lazy(() => import('./components/LazyLoading'))

const App = () => {
  return (
    <>
    <h1>Lazy Loading</h1>
    <Suspense fallback={<div>Loading Data...</div>}>
      <Lazy />
    </Suspense>
    </>
  )
}

export default App;