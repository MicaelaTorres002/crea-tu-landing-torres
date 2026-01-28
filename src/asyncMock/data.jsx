const productos = [
    {
        id:"01",
        nombre:"bordo-taco-bajo",
        descripcion:"Botas de taco bajo color bordo en cuero.",
        stock:20,
        precio:30000,
        categoria:"Botas",
        img:[
            "https://i.postimg.cc/Rh9c1nh7/bordo-taco-bajo.jpg",
            "https://i.postimg.cc/Rh9c1nh7/bordo_taco_bajo.jpg"
        ]
    },
    {
        id:"02",
        nombre:"borcegos-negros",
        descripcion:"borcegos negros acordonados en cuero",
        stock: 10,
        precio: 40000,
        categoria:"Botas",
        img:[
            "https://i.postimg.cc/mkw7m2F1/borcegos_negros.jpg"
        ]
    },
    {
        id:"03",
        nombre:"marrones-altas-taco-aguja",
        descripcion:"Botas marrones,altas hasta la rodilla, con taco aguja y punta flecha.",
        stock: 33,
        precio: 60000,
        categoria: "Botas",
        img:[
            "https://i.postimg.cc/mg6yxDp9/marrones_altas_taco_aguja.jpg"
        ]
    },
]

let error = false
export const getProducts = ()=>{
    return new Promise ((resolve, reject)=>{
        setTimeout (()=>{
            if(error){
                reject("hubo un error, intente más tarde")
            }else{
                resolve(productos)
            }
        },2000) 
    })
}