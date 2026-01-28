import '../css/Navbar.css'
import CartWidget from '../components/CartWidget'

const Navbar = ()=> {
    console.log("Navbar")
    return(
        <nav className='navbar-container'>
            <img src="#" alt="#"/>
            <a className='anchor.nav' href="#">Verano</a>
            <a className='anchor.nav' href="#">Zapatillas</a>
            <a className='anchor.nav' href="#">Botas</a>
            <a className='anchor.nav' href="#">Zapatos</a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar