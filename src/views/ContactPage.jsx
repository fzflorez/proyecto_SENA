import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react';

export default function ContactPage() {

  const [formContact, setFormContact] = useState({
    name: '', email: '', message: ''
  })
  const [errorMessage, setErrorMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  function handleChange(e) {
    setFormContact((prevFormContact) => {
      return {
        ...prevFormContact,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formContact.name === '' || formContact.email === '' || formContact.message === '') {
      setErrorMessage('* Todos los campos son obligatorios.');
      setMessageType('error');
      setTimeout(() => {
        setErrorMessage('');
        setMessageType('');
      }, 3000);
    } else {
      setErrorMessage('Mensaje enviado correctamente.');
      setMessageType('success');
      setFormContact({ name: '', email: '', message: '' });
      setTimeout(() => {
        setErrorMessage('');
        setMessageType('');
      }, 3000);
    }

  }

  return (
    <>
      <Header />

      <div className=' pt-16'>
        <div className=" flex justify-end items-center p-4 sm:p-4 md:p-6  bg-slate-700">
          <h2 className=" text-text-custom-16 sm:text-custom-16 md:text-lg xl:text-xl text-white font-bold uppercase">Contacto</h2>
        </div>

        <div className=" w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 py-20">
          <div className=" w-full sm:w-4/5 md:w-full md:justify-end lg:justify-end mx-auto h-full flex items-center justify-center flex-col">
            {errorMessage && (
              <div className={`fixed-message ${messageType === 'error' ? 'text-red-600' : 'text-green-500'}`}>
                {errorMessage}
              </div>
            )}
            <form action="" className=' w-4/5 md:w-11/12 xl:w-4/5'>
              <div className=" w-full flex justify-between">
                <div className=" w-[48%]">
                  <label
                    htmlFor="name"
                    className=' text-gray-800 text-custom-16'
                  > Nombre
                    <span className=' text-red-600 text-lg space-x-1'>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formContact.name}
                    className=' w-full h-12 text-black text-sm font-light px-3 bg-transparent border-2 border-gray-400'
                    onChange={handleChange}
                  />
                </div>

                <div className="  w-[48%]">
                  <label
                    htmlFor="phone"
                    className=' text-gray-800 text-custom-16'
                  > Telefono
                    <span className=' text-transparent text-lg space-x-1'>*</span>
                  </label>
                  <input
                    type="number"
                    name="phone"
                    className=' w-full h-12 text-black text-sm font-light px-3 bg-transparent border-2 border-gray-400'
                  />
                </div>
              </div>

              <div className=" w-full mt-4">
                <div className=" w-full">
                  <label
                    htmlFor="email"
                    className=' text-gray-800 text-custom-16'
                  > Correo eléctronico
                    <span className=' text-red-600 text-lg space-x-1'>*</span>
                    <input
                      type="email"
                      name="email"
                      value={formContact.email}
                      className=' w-full h-12 text-black text-sm font-light px-2 bg-transparent border-2 border-gray-400'
                      onChange={handleChange}
                    />
                  </label>
                </div>
              </div>

              <div className=" w-full mt-4">
                <div className=" ">
                  <label
                    htmlFor="message"
                    className=' text-gray-900 text-custom-16'
                  > Mensaje
                    <span className=' text-red-600 text-lg'>*</span>
                  </label>
                  <textarea
                    name="message"
                    cols="30"
                    rows="6"
                    value={formContact.message}
                    className=' w-full text-black text-sm font-light p-2 border-2 border-gray-400'
                    onChange={handleChange}
                  >
                  </textarea>
                </div>
              </div>

              <button
                type="submit"
                className=' text-white text-custom-16 bg-slate-800 font-normal py-2 px-3 mt-5'
                onClick={handleSubmit}
              >Enviar
                <i className="fa-regular fa-paper-plane"></i>
              </button>
            </form>
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
