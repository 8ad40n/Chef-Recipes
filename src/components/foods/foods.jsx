import { useEffect, useState } from "react";
import Food from "./food";

export default function Foods() {
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        fetch('recipes.json')
      .then(response => response.json())
      .then(json => setFoods(json))
    },[]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 container mx-auto mb-[2.5rem] md:mb-[4.5rem] lg:mb-[6.25rem] px-2 md:px-15 lg:px-20 text-center max-w-5xl">
        {
            foods.map(food=> <Food  key={food.id} food={food}></Food>)
        }
        </div>
    )
}
