import Header from "../components/Header"
import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import CardsProducts from "../components/CardsProducts"
import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabase.config"
import { useAuth } from "../context/AuthContext";


export default function ProductsPage() {

  const [products, setProducts] = useState();
  const [category, setCategory] = useState();
  const {addToCart, cart, removeFromCart, decreaseQuantity, increaseQuantity, amountTotal} = useAuth();
  const param = useParams();

  useEffect(()=>{
    const fetchData= async()=>{
      const res= await supabase.from("products").select("*").eq("category",param.id)
      const category= await supabase.from("categories").select("*").eq("id",param.id)
      setProducts(res.data)
      setCategory(category.data[0])
    } 
    fetchData()
  },[])

 
  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        amountTotal={amountTotal}
      />

      <section className="py-16 ">
        <div className=" flex justify-center sm:p-3 md:p-6 lg:p-10 p-3">
          <h2 className=" text-black tex-xl font-semibold uppercase">{category?.title}</h2>
        </div>

        <div className=" w-full">
          {
            products && (
              <div className=" grid sm:grid-cols-2 sm:px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-10 xl:grid-cols-4 gap-2 px-3">
                {products.map((product) => (
                  <CardsProducts
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            )
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

