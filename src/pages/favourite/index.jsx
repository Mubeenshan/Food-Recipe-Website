import React, { useContext } from 'react'
import RecipeItem from '../../recipe-list'
import { GlobalContext } from '../../context'

export default function Faviorite() {
  const{favouriteList}=useContext(GlobalContext
  )
  

      return (
    <div>
    <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
      {
        favouriteList && favouriteList.length >0 ?
        favouriteList.map((item,index)=><RecipeItem  index={index} item={item}/>)
        :<div>
          <p className='lg:text-4xl text-xl text-center font-sans text-black font-extrabold'>Nothing is added in favourite!</p>
          </div>
      }
    </div>
    </div>
  )
}
