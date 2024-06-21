import { Link, useParams } from "react-router-dom";
import { formatCurrency } from "../helpers";
import { useEffect, useState } from "react"
import { supabase } from "../supabase/supabase.config"

export default function CardsProducts({ product }) {

  const param = useParams()
  const[category, setCategory] = useState();

  useEffect(()=>{
    const fetchData= async()=>{
      const category= await supabase.from("categories").select("*").eq("id",param.id)
      setCategory(category.data[0])
    } 
    fetchData()
  },[])

  return (
    <div className=" w-full h-auto flex flex-col">
      <div>
        <Link to={"/productos/" + category?.title + '/' + product.id}
          className=" w-full h-96 bg-[#d7d9dd] flex justify-center items-center">
          <img src={`${product.image}`} alt="" className=" w-85% h-85%" />
        </Link>
      </div>
      <div className=" w-full p-2">
        <h3 className=" w-4/5 text-black text-sm font-normal">{product.name}</h3>
        <div className=" w-full flex space-x-4">
          <p className=" text-black text-sm font-semibold">{formatCurrency(product.price)}</p>
          {/* <span className=" text-gray-700 text-sm font-normal line-through ml-2">${product.discountPrice}</span> */}
        </div>
      </div>
    </div>
  )
}
