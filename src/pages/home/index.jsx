import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../recipe-list";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="py-12 container mx-auto">
        {/* Loading State */}
        {loading && (
          <div className="text-center text-2xl font-semibold text-gray-700">
            Loading, please wait...
          </div>
        )}

        {/* Recipe List */}
        <div className="flex flex-wrap justify-center gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((item, index) => (
              <RecipeItem key={index} index={index} item={item} />
            ))
          ) : (
            <div className="text-center">
              <p className="lg:text-4xl text-2xl font-bold text-gray-800">
                Nothing to Show. Please Search Something!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
