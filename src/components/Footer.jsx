import { Link } from "react-router-dom"

const icons = [
  {
    id: 1,
    icon: <i className="fa-brands fa-facebook-f text-white text-xs sm:text-xs md:text-sm lg:text-lg"></i>
  },
  {
    id: 2,
    icon: <i className="fa-brands fa-instagram text-white text-xs sm:text-xs md:text-sm lg:text-lg"></i>
  },
  {
    id: 3,
    icon: <i className="fa-brands fa-whatsapp text-white text-xs sm:text-xs md:text-sm lg:text-lg"></i>
  },
  {
    id: 4,
    icon: <i className="fa-brands fa-twitter text-white text-xs sm:text-xs md:text-sm lg:text-lg"></i>
  }
]

export default function Footer() {
  return (
    <footer className=" w-full bg-white">
      <section className=" w-full h-auto py-4 sm:py-4 md:py-6 lg:py-10 xl:py-12 space-y-4 sm:space-y-4 md:space-y-6 lg:space-y-8 xl:space-y-10 border-y border-gray-300  bg-gray-200">
        <div className=" w-full h-auto flex justify-center">
          <img src="/images/logo.png" alt="" className=" w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[240px]" />
        </div>
        <div className=" grid sm:grid-cols-2 sm:w-11/12 sm:gap-10 md:grid-cols-2 md:w-4/5 space-y-2 sm:space-y-0 mx-auto justify-center items-center">
          <div className=" w-full flex justify-start gap-4">
            {icons.map(icon => (
              <div key={icon.id} className=" w-6 sm:w-6 md:w-7 lg:w-8 xl:w-10 h-6 sm:h-6 md:h-7 lg:h-8 xl:h-10 rounded-full bg-black flex justify-center items-center hover:bg-gray-700">
                <Link to="#" className=" flex justify-center items-center">{icon.icon}</Link>
              </div>
            ))}
          </div>
          <div className=" w-full flex justify-center sm:justify-end items-center">
            <Link to={"/contact"} className=" text-lg font-semibold hover:text-cyan-900">Contacto</Link>
          </div>
        </div>
      </section>
      <section className=" w-full p-4 flex justify-end bg-gray-800">
        <p className=" text-custom-16 font-semibold text-white">2024 ElectricShop</p>
      </section>
    </footer>
  )
}
