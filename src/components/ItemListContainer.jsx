import { useEffect,useState } from "react"
import { getProducts } from "../asyncMock/data"
import ItemList from "./ItemList"

const ItemListContainer = ({saludo, greeting})=> {
    const [data, setData]= useState([])

    useEffect (()=>{
        getProducts()
        .then((res)=> setData(res))
        .catch((error)=>console.log(error))
    },[])
    
    console.log("ItemlistContainer")
    console.log(data)
    return(

        <div>
            <h1> {saludo} </h1>
            <h2> {greeting} </h2>
            {/* {data.map((prod)=><p key={prod.id}>producto:{prod.nombre}</p>)} */}
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer