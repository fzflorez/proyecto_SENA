import { useState } from "react";
import ContainerCart from "./ContainerCart";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Header() {

  const { signout, user, cart, removeFromCart, decreaseQuantity, increaseQuantity, amountTotal, authProvider } = useAuth();
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfile = () => {
    setOpenProfile(!openProfile);
  }

  function getInitial(name) {
    const firstWord = name.split(' ')[0];
    return firstWord.charAt(0).toUpperCase();
  }


  return (
    <div>
      <header className=" fixed z-20 w-full h-auto border-b border-gray-300">
        <div className=" w-full h-16 bg-white flex justify-between items-center space-x-5 sm:px-2 md:px-4 lg:px-6 px-2">
          <div className=" flex w-full justify-between items-center">
            <div className=" flex items-center h-14">
              <Link to={"/"}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className=" w-[60%] sm:w-[70%] md:w-[75%] lg:w-[85%] xl:w-[90%] py-1"
                />
              </Link>
            </div>

            <div className=" flex space-x-4">
              <ContainerCart
                cart={cart}
                removeFromCart={removeFromCart}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
                amountTotal={amountTotal}
              />
            </div>
          </div>

          {
            user
              ? (
                <div>
                  {user &&
                    <>
                      {authProvider.provider === 'google' && (
                        <div className=" w-7 sm:w-7 md:w-8 lg:w-9 h-7 sm:h-7 md:h-8 lg:h-9 rounded-full overflow-hidden">
                          <img src={user.picture} alt="" className="w-full h-full cursor-pointer" onClick={handleOpenProfile} />
                        </div>
                      )}

                      {authProvider.provider === "email" && (
                        <div onClick={handleOpenProfile} className=" w-9 h-9 rounded-full bg-slate-500 flex justify-center items-center cursor-pointer">
                          <p className=" text-white font-semibold">{getInitial(user.name)}</p>
                        </div>
                      )}
                    </>
                  }

                  {openProfile &&
                    <div className=" fixed top-14 right-0 shadow-sm shadow-gray-400 bg-gray-50 rounded-xl min-w-48 min-h-20 px-6 py-2 flex flex-col items-center space-y-3">
                      <div className=" flex flex-col items-center space-y-2">
                        <h2 className=" text-sm sm:text-custom-16 md:text-custom-16 lg:text-lg ">¡Hola, {user.name}!</h2>
                      </div>
                      <button
                        className=" text-sm sm:text-custom-16 md:text-custom-16 lg:text-lg py-1 w-full rounded-xl hover:bg-gray-200"
                        onClick={signout}
                      > Cerrar sesión
                      </button>
                    </div>
                  }
                </div>
              )
              : <div>
                <Link to={"/login"}><i className=" text-lg sm:text-lg md:text-xl xl:text-custom-22 font-bold fa-regular fa-user"></i></Link>
              </div>
          }


        </div>
      </header>
    </div>
  )
}

