import '../css/Navbar.css'
import CartWidget from '../components/CartWidget'

const Navbar = ()=> {
    console.log("Navbar")
    return(
        <nav className='navbar-container'>
            <img src="#" alt="#"/>
            <a className='anchor.nav' href="#"></a>
            <a className='anchor.nav' href="#"></a>
            <a className='anchor.nav' href="#"></a>
            <a className='anchor.nav' href="#"></a>
            <CartWidget/>
        </nav>
    )
}

export default Navbar