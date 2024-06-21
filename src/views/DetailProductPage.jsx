import Header from "../components/Header"
import Footer from "../components/Footer"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { formatCurrency } from "../helpers"
import { supabase } from "../supabase/supabase.config"
import { useAuth } from "../context/AuthContext";

export default function DetailProductPage() {

  const [productAdded, setProductAdded] = useState(false);
  const [noProduct, setNoProduct] = useState(false);
  const [tranzacion, setTranzacion] = useState(false);
  const [detailProduct, setDetailProduct] = useState()
  const { user, cart, addToCart, clearCart } = useAuth();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const res = await supabase.from("products").select("*").eq('id', param.id)
      setDetailProduct(res.data[0])
    }
    fetchData()
  }, [])

  const handleBuys = () => {
    if (!user) {
      navigate('/login')
    } else if (cart.length === 0) {
      setNoProduct(true)
      setTimeout(() => {
        setNoProduct(false)
      }, 3000);
      console.log('Aun no tienes productos para comprar')
    } else {
      setTranzacion(true);
      clearCart();
      setTimeout(() => {
        setTranzacion(false)
        navigate('/')
      }, 3000);
    }
  }

  const hadleaddCart = () => {
    if (!user) {
      navigate('/login')
    } else {
      addToCart(detailProduct)
      setProductAdded(true);
      setTimeout(() => {
        setProductAdded(false);
      }, 2000);
    }
  }


  return (
    <>
      <Header />

      {
        detailProduct &&
        <section className=" grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 w-full mx-auto py-16 bg-gray-50">
          <div className=" w-full h-[340px] sm:h-[360px] md:h-[420px] lg:h-[440px] xl:h-[500px] flex items-center justify-center py-5 overflow-hidden  lg:justify-end">
            <div className=" w-4/5 sm:w-3/5 md:w-1/2 lg:w-9/12 xl:w-3/5 h-full border border-gray-400 bg-[#d7d9dd] flex justify-center items-center">
              <img src={`${detailProduct.image}`} alt="" className=" h-[90%] " />
            </div>
          </div>

          <div className=" w-full flex flex-col items-center justify-center py-5">
            <div className=" w-4/5 sm:w-3/5 md:w-1/2 lg:w-3/5 xl:w-1/2 border-2 border-gray-400 p-5">
              <h2 className=" text-custom-16 font-semibold">{detailProduct.name}</h2>
              <div className=" flex gap-5">
                <p className=" font-semibold text-lg">{formatCurrency(detailProduct.price)}</p>
                <span className=" font-semibold text-custom-16 text-gray-600 line-through">{detailProduct.discountPrice}</span>
              </div>
              <div className=" mt-3">
                <p className=" text-sm font-normal">{detailProduct.description}</p>
              </div>
              <div className=" mt-10 space-y-3">
                <div>
                  <button
                    className=" flex items-center justify-center w-full text-custom-16 text-white font-semibold bg-[#3483fa] h-10  rounded-md transition-all hover:bg-[#3775d2]"
                    onClick={handleBuys}
                  >
                    Comprar ahora
                  </button>
                  {noProduct &&
                    <div className=" absolute top-20 right-8">
                      <div className=" flex items-center bg-white border border-gray-300 px-4 py-3 rounded-md space-x-2">
                        <div className=" w-7 h-7 rounded-full bg-red-400 flex justify-center items-center">
                          <i className=" text-white fa-solid fa-xmark"></i>
                        </div>
                        <div>No tiene productos en el carrito.</div>
                      </div>
                    </div>
                  }
                  {tranzacion &&
                    <div className=" absolute top-20 right-8">
                      <div className=" flex items-center bg-white border border-gray-300 px-4 py-3 rounded-md space-x-2">
                        <div className=" w-7 h-7 rounded-full bg-green-400 flex justify-center items-center">
                          <i className=" text-white fa-solid fa-check"></i>
                        </div>
                        <div>Tu transacción ha sido completada con éxito.</div>
                      </div>
                    </div>
                  }
                </div>

                <div>
                  <button
                    className=" w-full text-custom-16 text-[#3483fa] font-semibold bg-[#d3e6ff] h-10 rounded-md hover:bg-[#c5defc] transition-all"
                    onClick={hadleaddCart}
                  >
                    Añadir al carrito
                  </button>
                  {productAdded &&
                    <div className=" absolute top-20 right-8">
                      <div className=" flex items-center bg-white border border-gray-300 px-4 py-3 rounded-md space-x-2">
                        <div className=" w-7 h-7 rounded-full bg-green-400 flex justify-center items-center">
                          <i className=" text-white fa-solid fa-check"></i>
                        </div>
                        <div>Producto agregado correctamente</div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>

        </section>
      }

      <Footer />
    </>
  )
}

