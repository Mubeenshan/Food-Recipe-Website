import React, { useContext } from "react";
import { NavLink } from "react-router";
import GlobalProvider, { GlobalContext } from "../../context";

export default function Navbar() {

  const {searchPara, setSearchPara,handlesubmit} = useContext(GlobalContext)
  console.log(searchPara)
  return (
    <nav className="flex justify-between items-center py-8 container top-0 z-50 mx-auto lg:flex-row gap-5 lg:gap-0 sticky bg-gray-400 rounded ">
      <h2 className="text-3xl font-bold text-white pl-3 italic">FoodRecipe</h2>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="search"
          value={searchPara}
          onChange={(event)=>setSearchPara(event.target.value)}
          placeholder="Enter item ..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-2xl shadow-red-200 focus:shadow-red-300"
        />
      
      </form>
      <ul className="flex gap-5">
        <li>
            <NavLink to={"/"} className="text-black hover:text-white hover:scale-110 font-bold italic duration-1000 ">Home</NavLink>
        </li>
        <li>
            <NavLink to={"/favourite"} className="text-black font-bold italic hover:text-white hover:scale-110 duration-1000 ">Favourite</NavLink>
        </li>
        <li>
            <NavLink to={"/recipe-item/:id"} className="text-black hover:text-red-500 duration-1000"></NavLink>
        </li>

      </ul>
    </nav>
  );
}
