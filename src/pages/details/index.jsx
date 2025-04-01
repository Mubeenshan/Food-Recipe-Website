import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Details() {
  const { id } = useParams();
  console.log(id);

  const {
    recipeDetails,
    setRecipeDetails,
    favouriteList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await response.json();
        if (data?.data?.recipe) {
          setRecipeDetails(data.data);
        }
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    }
    getRecipeDetails();
  }, [id]);

  return (
    <div className="container mx-auto py-10 px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="row-start-2 lg:row-start-auto">
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <img
              src={recipeDetails?.recipe?.image_url}
              className="w-full h-full object-cover block hover:scale-105 duration-300 rounded-xl"
              alt="Recipe Image"
            />
          </div>
        </div>

        {/* Recipe Details Section */}
        <div className="flex flex-col gap-6 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <span className="text-sm px-5 py-2 rounded-lg uppercase font-medium tracking-wide bg-cyan-100 text-cyan-800 self-start">
            {recipeDetails?.recipe?.publisher}
          </span>

          <h3 className="font-bold text-2xl text-gray-800">
            {recipeDetails?.recipe?.title}
          </h3>

          {/* Add to Favourite Button */}
          <button
            onClick={() => handleAddToFavourite(recipeDetails?.recipe)}
            className="text-sm px-6 py-3 rounded-lg uppercase font-medium tracking-wide shadow-md bg-gray-900 text-white transition-all duration-300 hover:bg-cyan-600 hover:shadow-lg"
          >
            {favouriteList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from Favourite"
              : "Add to Favourite"}
          </button>

          {/* Ingredients Section */}
          <div>
            <h4 className="text-xl font-semibold text-black mb-3">Ingredients</h4>
            <ul className="flex flex-col gap-3 text-gray-700">
              {recipeDetails?.recipe?.ingredients?.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
                  <span className="font-semibold">{ingredient.quantity} {ingredient.unit}</span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
