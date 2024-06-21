import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className=' pt-16'>
        <div className=" flex justify-end items-center p-4 sm:p-4 md:p-6  bg-slate-700">
          <h2 className=" text-text-custom-16 sm:text-custom-16 md:text-lg xl:text-xl text-white font-bold uppercase">Contacto</h2>
        </div>

        <div className=" w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 py-20">
          <div className=" w-full sm:w-4/5 md:w-full md:justify-end lg:justify-end mx-auto h-full flex items-center justify-center">
            <form action="" className=' w-4/5 md:w-11/12 xl:w-4/5'>
              <div className=" w-full flex justify-between">
                <div className=" w-[48%] relative">
                  <input
                    type="text"
                    name="nombre"
                    className=' w-full h-12 text-black text-sm font-light px-3 bg-transparent border-2 border-gray-400'
                  />
                  <label
                    htmlFor="nombre"
                    className=' absolute top-0 left-3 text-gray-800 text-custom-16 bg-white px-1 -translate-y-1/2'
                  > Nombre
                    <span className=' text-red-600 text-lg space-x-1'>*</span>
                  </label>
                </div>

                <div className="  w-[48%] relative">
                  <input
                    type="text"
                    name="telefono"
                    className=' w-full h-12 text-black text-sm font-light px-3 bg-transparent border-2 border-gray-400'
                  />
                  <label
                    htmlFor="telefono"
                    className=' absolute top-0 left-3 text-gray-800 text-custom-16 bg-white px-1 -translate-y-1/2'
                  > Telefono
                  </label>
                </div>
              </div>

              <div className=" w-full relative mt-6">
                <div className=" w-full">
                  <input
                    type="email"
                    name="email"
                    className=' w-full h-12 text-black text-sm font-light px-2 bg-transparent border-2 border-gray-400'
                  />
                  <label
                    htmlFor="email"
                    className=' absolute top-0 left-2 text-gray-800 text-custom-16 bg-white px-1 -translate-y-1/2'
                  > Correo eléctronico
                    <span className=' text-red-600 text-lg space-x-1'>*</span>
                  </label>
                </div>
              </div>

              <div className=" w-full relative mt-6">
                <div className=" ">
                  <textarea
                    name="mensaje"
                    cols="30"
                    rows="6"
                    className=' w-full text-black text-sm font-light p-2 border-2 border-gray-400'
                  >
                  </textarea>
                  <label
                    htmlFor="mensaje"
                    className=' absolute top-0 left-2 text-gray-900 text-custom-16 bg-white px-1 -translate-y-1/2'
                  > Mensaje
                    <span className=' text-red-600 text-lg'>*</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled
                className=' text-white text-custom-16 bg-slate-800 font-normal py-2 px-3 mt-5'
              >Enviar
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>

            <div className="spinner">
              <div className="rect1 rect"></div>
              <div className="rect2 rect"></div>
              <div className="rect3 rect"></div>
              <div className="rect4 rect"></div>
              <div className="rect5 rect"></div>
            </div>
          </div>

          <div className=" py-14 sm:py-14 w-3/5 md:py-0 sm:w-3/5 md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto flex flex-col text-center space-y-2">
            <div className=" w-full md:w-full lg:w-full xl:w-full h-28 bg-gray-100 border-2 border-gray-300 rounded-md flex flex-col items-cente justify-center">
              <h3 className=' text-gray-800 text-sm font-semibold uppercase mb-2'>dirección</h3>
              <p className=' text-gray-700 text-sm sm:text-sm md:text-sm lg:text-custom-16 font-normal'>
                <span>Calle 9 # 14-13</span>
              </p>
            </div>

            <div className=" w-full md:w-full lg:w-full xl:w-full h-28 bg-gray-100 border-2 border-gray-300 rounded-md flex flex-col items-cente justify-center">
              <h3 className=' text-gray-800 text-sm font-semibold uppercase mb-2'>teléfono</h3>
              <p className=' text-gray-700 text-sm sm:text-sm md:text-sm lg:text-custom-16 font-normal'>
                <span>192383</span>
              </p>
            </div>

            <div className=" w-full md:w-full lg:w-full xl:w-full h-28 bg-gray-100 border-2 border-gray-300 rounded-md flex flex-col items-cente justify-center">
              <h3 className=' text-gray-800 text-sm font-semibold uppercase mb-2'>horarios</h3>
              <p className=' text-gray-700 text-sm sm:text-sm md:text-sm lg:text-custom-16 font-normal'>
                <span>De Lunes a Viernes: <br /> 
                8:00 a 12:00 - 13:30 a 18:00</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
