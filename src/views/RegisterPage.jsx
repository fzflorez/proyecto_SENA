import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { supabase } from "../supabase/supabase.config";
import { useState } from "react";

export default function RegisterPage() {

  // Form
  const [formData, setFormData] = useState({
    name: '', email: '', password: ''
  })
  const [errorMesaage, setErrorMessage] = useState('');


  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.email === '' || formData.password === '') {
      console.log('Todos los Campos')
      setErrorMessage('Todos los campos son obligatorios.')
      setTimeout(() => {
        setErrorMessage('')
      }, 3000);
    } else {
      setErrorMessage('')
    }
    
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              name: formData.name,
            }
          }
        }
      )
      if(error) throw error
      alert('revisa tu correo electrónico para ver el enlace de verificación');

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />

      <div className=" pt-16">
        <div className=" flex justify-end items-center p-4 sm:p-4 md:p-6  bg-slate-700">
          <h2 className=" text-text-custom-16 sm:text-custom-16 md:text-lg xl:text-xl text-white font-bold  uppercase">Registrarse</h2>
        </div>

        <div className=" w-full py-14">
          <form onSubmit={handleSubmit} className=" w-4/5 mx-auto flex flex-col justify-center items-center">
            <div className=" md:w-4/5 w-full flex mb-9">
              <div className=" w-1/2 h-11 bg-transparent border border-slate-700 flex text-center">
                <Link
                  to={"/register"}
                  className="w-full h-full bg-slate-600 flex justify-center items-center text-white text-sm sm:text-sm lg:text-custom-16 font-semibold no-underline uppercase"
                >
                  registrate
                </Link>
              </div>
              <div className=" w-1/2 h-11 bg-transparent border border-slate-700 flex text-center">
                <Link
                  to={"/login"}
                  className=" w-full h-full  flex justify-center items-center text-slate-800 text-sm sm:text-sm lg:text-custom-16 font-semibold no-underline uppercase"
                >
                  iniciar sesión
                </Link>
              </div>
            </div>

            {errorMesaage &&
              <p className=" text-red-600  pb-4">{errorMesaage}</p>
            }

            <div className=" md:w-4/5 w-full border border-gray-300 rounded-md py-7 px-5 flex flex-col justify-center">
              <label htmlFor="name" className=" text-gray-800 text-sm sm:text-sm lg:text-custom-16 font-semibold">Nombre</label>
              <input
                type="text"
                name="name"
                autoComplete="name"
                className=" w-full h-10 px-1 border border-gray-300 rounded-md bg-transparent text-slate-900 text-custom-16 mb-3 focus:outline-none"
                onChange={handleChange}
              />

              <label htmlFor="email" className=" text-gray-800 text-sm sm:text-sm lg:text-custom-16 font-semibold">Correo eléctronico</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                className=" w-full h-10 px-1 border border-gray-300 rounded-md bg-transparent text-slate-900 text-custom-16 mb-3 focus:outline-none"
                onChange={handleChange}
              />

              <label htmlFor="password" className=" text-gray-800 text-sm sm:text-sm lg:text-custom-16 font-semibold">Contraseña</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                className=" w-full h-10 px-1 border border-gray-300 rounded-md bg-transparent text-slate-900 text-custom-16 mb-3 focus:outline-none"
                onChange={handleChange}
              />

              <button
                type="submit"
                className=" w-28 h-9 uppercase text-xs sm:text-xs md:text-sm font-normal text-white bg-slate-700 mt-2"
                onClick={handleSubmit}
              > Registrarme
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  )
}
