import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


export default function LoginPage() {

  const { signInWithGoogle, singnInWithEmail } = useAuth();
  const [formData, setFormData] = useState({
    email: '', password: ''
  })

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  async function handleSubmit(e, singInProvider) {
    e.preventDefault();

    if (singInProvider === "email") {
      try {
        e.preventDefault()
      } catch (error) {
        console.log(error)
      }

      singnInWithEmail(formData)
    } else if (singInProvider === "google") {
      try {
        e.preventDefault();
        signInWithGoogle()
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <Header />

      <div className=" pt-16">
        <div className=" flex justify-end items-center p-4 sm:p-4 md:p-6  bg-slate-700">
          <h2 className=" text-text-custom-16 sm:text-custom-16 md:text-lg xl:text-xl text-white font-bold uppercase">Iniciar sesion</h2>
        </div>
        <div className=" w-full py-14 flex flex-col items-center space-y-6">
          <form onSubmit={(evt) => handleSubmit(evt, "email")} className=" w-4/5 mx-auto flex flex-col justify-center items-center">
            <div className=" md:w-4/5 w-full flex mb-9">
              <div className=" w-1/2 h-11 bg-transparent border border-slate-700 flex text-center">
                <Link to={"/register"}
                  className=" w-full h-full  flex justify-center items-center text-slate-800 text-sm sm:text-sm lg:text-custom-16 font-semibold no-underline uppercase"
                >
                  registrarse
                </Link>
              </div>
              <div className=" w-1/2 h-11 bg-transparent border border-slate-700 flex text-center">
                <Link
                  to={"/login"}
                  className="w-full h-full bg-slate-600 flex justify-center items-center text-white text-sm sm:text-sm lg:text-custom-16 font-semibold no-underline uppercase"
                >
                  iniciar sesión
                </Link>
              </div>
            </div>

            <div className=" md:w-4/5 w-full border border-gray-300 rounded-md py-7 px-5 flex flex-col justify-center">
              <label htmlFor="email" className=" text-gray-800 text-sm sm:text-sm lg:text-custom-16 font-semibold">Correo eléctronico</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                className=" w-full h-10 px-1 border border-gray-300 rounded-md bg-transparent text-slate-900 text-custom-16 mb-3 focus:outline-none"
              />

              <label htmlFor="password" className=" text-gray-800 text-sm sm:text-sm lg:text-custom-16 font-semibold">Contraseña</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                onChange={handleChange}
                className=" w-full h-10 px-1 border border-gray-300 rounded-md bg-transparent text-slate-900 text-custom-16 mb-3 focus:outline-none"
              />

              <button
                type="submit"
                className=" w-28 h-9 uppercase text-xs sm:text-xs md:text-sm  font-normal text-white bg-slate-700 mt-2"
              > ingresar
              </button>
              <Link to="" className=" text-sm font-semibold text-slate-900 mt-6">Olviste tu contraseña?</Link>
            </div>
          </form>

          <span>o</span>

          <div
            onClick={(evt) => handleSubmit(evt, "google")}
            className=" flex items-center px-8 py-2 border-2 border-slate-800 rounded-lg space-x-2 cursor-pointer">
            <img src="/images/logo-google.png" alt="" className=" w-5 h-5" />
            <button
              type="submit"
              className=" text-sm sm:text-sm md:text-custom-16 font-semibold"
            > Continuar con Google
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
