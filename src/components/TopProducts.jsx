import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "./utils/app.constants";

function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(PRODUCTS_URL);
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-28">
      <span className="text-4xl font-bold text-blue-600">Top products</span>
      <div className="flex gap-12 overflow-x-scroll mt-8 no-scrollbar">
        {products?.slice(1).map((product) => (
          <div
            key={product.title}
            className="max-w-80 min-w-80 h-96 flex flex-col justify-center items-center 
            bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-fit"
            />
            <span className="w-full text-center">{product.title}</span>
            <span className="font-medium mt-2">${product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
