import { useState } from "react";
import { AddCategory,GifGrid } from './components';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories]= useState(['one punch man']);

  const onAddCategory = (newCategory) => {
    if ( categories.includes(newCategory) ) return;
    setCategories([newCategory,...categories]);
  };
  
  return (
    <>
    {/* {*titutlo*} */}
        <h1>GifExpertApp</h1>

    {/* {*input*} */}    
    <AddCategory 
    onNewCategory = {(event) =>onAddCategory(event)} />


    {/* {*listado de gif*} */}
    
    { 
    categories.map( ( category ) => (
        <GifGrid 
            key={ category } 
            category={ category } />
    ))
    }
       
     {/* {*gif items*} */}



    </>
  )
}
