import { createContext, useState } from "react";
import { useNavigate } from "react-router";

// Create context
export const GlobalContext = createContext(null);

// Create a provider component
export default function GlobalProvider({ children }) {
  const [searchPara, setSearchPara] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favouriteList, setFavouriteList] = useState([]);
  const navigate = useNavigate()
  async function handlesubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchPara}`
      );
      const data = await res.json();
      if (data?.data.recipes) {
        setRecipeList(data?.data.recipes);
        setLoading(false);
        setSearchPara("");
        navigate("/")
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchPara("");
    }
  }

  function handleAddToFavourite(getcuuretitem){
    let cpyFavouriteList = [...favouriteList];
    let index = cpyFavouriteList.findIndex(item=>item.id === getcuuretitem.id)
    if(index === -1){
      cpyFavouriteList.push(getcuuretitem)
    }else{
      cpyFavouriteList.splice(index)
    }
    setFavouriteList(cpyFavouriteList)
  }
  

  return (
    <GlobalContext.Provider
      value={{
        loading,
        recipeList,
        searchPara,
        setSearchPara,
        handlesubmit,
        recipeDetails,
        setRecipeDetails,
        favouriteList,
         setFavouriteList,
         handleAddToFavourite
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
