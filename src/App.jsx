import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'
import ItemCount from './components/ItemCount'


function App() {

  const greeting = "hello"
  console.log("App")

  return (
    <>
      <Navbar/>
      <ItemListContainer saludo="bienvenidos a mi app" greeting = {greeting}/>
      <ItemCount/>
    </>
  )
}

export default App
