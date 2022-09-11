import { useState } from "react"


export const AddCategory = ({onNewCategory})=> {

    const [search, setSearch] = useState('')
    const onInputChange  = (event)=>{
        
        setSearch(event.target.value)
    }

    const onSubmit= (event)=>{
        event.preventDefault()
        // trim borra los espacios en blanco de frente y atras 
        if (search.trim().length <= 1) return;

        onNewCategory(search.trim());
        // setCategories(categories => [search,...categories]);
        setSearch('');
    }

    return (

        <form onSubmit={ (event)=> onSubmit(event)}>
           <input typeof="text"
                 placeholder="Buscar Gif Favoritos"
                 value={search}
                 onChange={(e)=>onInputChange(e)}/> 
        </form>
    
    )
}