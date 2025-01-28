import axios from "axios";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";

const Query = (urlPath) => {
  const { products, setProducts, setLoading, setError, search, loading, error } = useContext(ProductContext);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await axios.get(urlPath);
        console.log(response.status);
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [search, urlPath]);

  return { products, error, loading };
};

export default Query;
