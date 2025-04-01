import React from "react";
import { Link } from "react-router-dom";

export default function RecipeItem({ item }) {
  return (
    <div className="flex flex-col overflow-hidden p-5 bg-white/75 shadow-lg gap-5 border-2 rounded-2xl border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Container */}
      <div className="h-42 flex justify-center overflow-hidden items-center rounded-xl">
        <img
          src={item?.image_url}
          alt="Recipe item"
          className="block w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Recipe Details */}
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-cyan-800">{item?.publisher}</span>
        <h3 className="font-bold text-xl truncate text-gray-700 text-wrap">
          {item.title}
        </h3>

        {/* Recipe Details Button */}
        <Link
          to={`/recipe-item/${item.id}`}
          className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-gray-900 text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}
