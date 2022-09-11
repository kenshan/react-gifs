import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif"
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";


export const GifGrid = ({category}) => {

    const {images, isLoading}= useFetchGif(category);
    
    
    return (
       <>
        <h3>{category}</h3>

      {
        isLoading && ( <h2>We are loading your images ...</h2> )
      }

        <div className="card-grid">
    
   
   {
    images.map( (images)=> ( 
      
      <GifItem key={images.id}
                   {...images}
      />

    ) )}
    
        
  
  
    </div> 


      {/* <p>{ getImages.map() }</p> */}
    

    
    </>
  )
    
}