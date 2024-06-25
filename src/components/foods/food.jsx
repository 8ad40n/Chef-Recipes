import cal from "../../assets/calorie.png";
import minute from "../../assets/time.png";

export default function Food({food}) {
    const {id,food_image,title,description,ingredients,time,calories} = food;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl">
            <figure className="px-5 pt-5">
                <img
                src={food_image}
                alt={title}
                className="rounded-xl h-60 w-full" />
            </figure>
            <div className="card-body ml-4 items-left text-left">
                <h2 className="card-title">{title}</h2>
                <p className="font-light h-20">{description}</p>
                <hr className="my-2" />
                <div className="items-left text-left">
                    <h3 className="text-lg font-semibold mb-1.5">Ingredients: {ingredients.length}</h3>
                    <ul className="list-disc ml-8 font-light">
                        {ingredients.map(ing => <li>{ing}</li>)}
                    </ul>
                </div>
                <hr className="my-2"/>
                <div className="flex gap-4 mb-4">
                    <div className="flex items-center gap-1">
                        <img src={minute} alt="" />
                        <p className="font-light text-sm">{time} minutes</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src={cal} alt="" />
                        <p className="font-light text-sm">{calories} calories</p>
                    </div>
                </div>  
                <button className="btn bg-[#0BE58A] rounded-full w-1/2">Want to Cook</button>
            </div>
            </div>
        </div>

    )
}
