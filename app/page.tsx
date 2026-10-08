import { Card } from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 max-w-7xl p-3 mx-auto">
        {products.map((product) => <Card key={product.id} {...product}/>)}
      </div>
      <button className="bg-[#02578A] h-10 w-72 text-white rounded-full text-[14px] mx-auto mt-8 cursor-pointer">СМОТРЕТЬ ВСЮ КОЛЛЕКЦИЮ</button>
    </>
  )
}

export default App