import { useState } from "react"
import { formatCurrency } from "../helpers"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function ContainerCart() {
  const {user, cart, removeFromCart, decreaseQuantity, increaseQuantity, amountTotal, clearCart, cartTotal} = useAuth();
  const [tranzacion, setTranzacion] = useState(false);
  const navigate = useNavigate();
  const [openMenu, setopenMenu] = useState(false);

  const handleBuys = () => {
    if (!user) {
      navigate('/login')
    } else {
      setTranzacion(true);
      setTimeout(() => {
        setTranzacion(false)
        clearCart();
        navigate('/')
      }, 3000);
    }
  }


   
  return (
    <div>
      <button
        type="button"
        className=" relative"
        onClick={() => setopenMenu(true)}
        >
        <i className=" text-lg sm:text-lg md:text-xl xl:text-custom-22 fa-solid fa-bag-shopping"></i>
        <div className=" absolute -top-2 -right-3 font-bold text-bold w-5 h-5  bg-white border border-black flex items-center justify-center rounded-full">{amountTotal}</div>
      </button>

      {openMenu &&
        <div className= {`fixed max-h-screen h-full w-full md:w-72 lg:w-96 right-0 top-0 bg-white shadow-2xl p-5 z-20
          ${setopenMenu ? 'animate-openMenu' : 'animate-closeMenu'}`}>
          <div className=" flex justify-end ">
            <button
              type="button"
              onClick={() => setopenMenu(false)}
              >
              <i className=" text-2xl font-semibold fa-solid fa-xmark"></i>
            </button>
          </div>

          {cart && cart.length === 0 ? (
            <div className=" w-full h-full flex flex-col justify-center items-center gap-2 p-2">
              <img src="/images/shopping-vacio.png" alt="" className=" w-60" />
              <h2 className=" text-xl font-bold">Carrito vacio</h2>
              <p className=" text-center">Tu carrito aún está vacio, agrega tus productos.</p>
            </div>
          ) : (
            <div className=" w-full h-95% flex flex-col relative">
              <p className=" py-2 text-2xl font-bold">Cantidad
                <span className=" text-xl font-semibold absolute top-1 px-1">({amountTotal})</span>
              </p>
              <div className=" max-h-[68vh] overflow-y-auto">
                {
                  cart &&
                  cart.map((product) => (
                    <div key={product.id}>
                      <div className=" border-t last-of-type:border-b py-4">
                        <div className=" w-full h-32 flex  border-gray-200 gap-4">
                          <div className=" w-1/3 h-full bg-[#f0f0f0]">
                            <img src={`${product.image}`} alt="" className=" w-full h-full border" />
                          </div>
                          <div className=" w-2/3 flex flex-col justify-between">
                            <div>
                              <div>
                                <h3 className=" text-black text-sm font-normal">{product.name}</h3>
                              </div>
                              <div className=" mt-1 flex">
                                <p className=" text-black text-sm font-semibold">{formatCurrency(product.price)}</p>
                                {/* <span className=" text-black text-sm font-normal line-through ml-1">${product.discountPrice}</span> */}
                              </div>
                            </div>
                            <div className=" flex justify-between items-end">
                              <div className=" flex items-center justify-center gap-2">
                                <button
                                  type="button"
                                  className=" w-8 h-8 bg-transparent border border-gray-400 flex justify-center items-center"
                                  onClick={() => decreaseQuantity(product.id)}
                                >
                                  -
                                </button>
                                {product.quantity}
                                <button
                                  type="button"
                                  className=" w-8 h-8 bg-transparent border border-gray-400 flex justify-center items-center"
                                  onClick={() => increaseQuantity(product.id)}
                                >
                                  +
                                </button>
                              </div>
                              <button
                                type="button"
                                className="  w-7 h-7 text-gray-600 text-xl hover:text-gray-800"
                                onClick={() => removeFromCart(product.id)}
                              >
                                <i className=" fa-solid fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className=" space-y-4 mt-10">
                <div className=" flex justify-end">
                  <p>Total pagar: <span className=" font-bold">{formatCurrency(cartTotal())}</span></p>
                </div>
                <div>
                  <button
                    className=" flex items-center justify-center w-full text-custom-16 text-white font-semibold bg-[#3483fa] h-10  rounded-md transition-all hover:bg-[#3775d2]"
                    onClick={handleBuys}
                  >
                    Comprar ahora
                  </button>
                  {tranzacion &&
                    <div className=" fixed top-2 right-12 max-w-80">
                      <div className=" flex items-center bg-white border border-gray-300 px-4 py-2 rounded-md space-x-1">
                        <div className=" w-7 h-7 rounded-full bg-green-400 flex justify-center items-center">
                          <i className=" text-white fa-solid fa-check"></i>
                        </div>
                        <p className=" text-custom-16">Tu transacción ha sido completada con éxito.</p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          )}
        </div>}
    </div>
  )
}
