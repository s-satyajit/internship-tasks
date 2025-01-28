import { useContext } from "react";
import "./App.css";
import Query from "./hooks/Query";
import ProductContext from "./context/ProductContext";

function App() {
  const { search, setSearch } = useContext(ProductContext);
  const { products, loading, error } = Query(`/api/products?search=${search}`);

  return (
    <>
      <h1>API Handling in React</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Something Went Wrong</h1>}
      {!loading && !error && <h2>Number of products are: {products.length}</h2>}
    </>
  );
}

export default App;
