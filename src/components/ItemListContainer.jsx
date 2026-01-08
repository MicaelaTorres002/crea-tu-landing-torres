const ItemListContainer = ({saludo, greeting})=> {
    console.log("ItemlistContainer")
    return(

        <div>
            <h1> {saludo} </h1>
            <h2> {greeting} </h2>
        </div>
    )
}

export default ItemListContainer