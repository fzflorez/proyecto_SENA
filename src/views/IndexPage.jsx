import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabase.config";


export default function IndexPage() {
  const [category, setCategory] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await supabase.from("categories").select("*")
      setCategory(res.data)
    }
    fetchData()
  }, [])


  return (
    <>
      <Header />

      <main >
        <section className=" h-[420px] sm:h-[500px] md:h-[550px] lg:h-[620px] fixed top-16 w-full  z-0 bg-custom-image bg-cover bg-no-repeat bg-center"></section>
        <section className=" absolute top-[400px] sm:top-[440px] md:top-[480px] lg:top-[560px] xl:top-[610px] w-full  bg-white ">
          <div className=" py-3 sm:py-3 md:py-5 lg:py-6 xl:py-8 flex justify-center">
            <h2 className=" uppercase text-sm sm:text-sm md:text-custom-16 lg:text-lg font-bold">Categorías</h2>
          </div>
          <section className=" grid sm:grid-cols-2 sm:px-5 md:grid-cols-2 lg:px-10 lg:grid-cols-3 xl:grid-cols-4 gap-2 pb-14 px-3">
            {
              category &&
              category.map(card => (
                <div key={card.id} >
                  <Link to={"/productos/" + card.id} className=" flex flex-col justify-center mb-2 ">
                    <div className=" w-full h-[360px] overflow-hidden">
                      <img src={`${card.image}`} alt="" className=" w-full h-full hover:scale-110 transition-all duration-700" />
                    </div>
                    <p className=" capitalize font-semibold flex justify-center text-sm sm:text-sm lg:text-custom-16">{card.title}</p>
                  </Link>
                </div>
              ))}
          </section>

          <Footer />
        </section>
      </main>
    </>
  )
}
