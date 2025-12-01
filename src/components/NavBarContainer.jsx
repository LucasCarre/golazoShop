import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./NavBar";

function NavBarContainer (){
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://68abd0167a0bbe92cbb8534a.mockapi.io/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return(
        <NavBar categories={categories}/>
    )
}

export default NavBarContainer;