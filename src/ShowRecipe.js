function ShowRecipe({label, picture, type, ingredients}) {

return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
            <p>{type}</p>
        </div>
        <div className="list">
            <ul>
            {ingredients.map(ingredient=>(
                <li>{ingredient}</li>
            ))}
            </ul>
        </div>
    </div>

    )
    
}

export default ShowRecipe;