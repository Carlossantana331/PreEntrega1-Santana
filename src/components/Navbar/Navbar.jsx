import logo from '../../assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

function navBar() {
  return (
    <nav className='navbar'>

      <section>
        <img className='logo' src={logo} alt='logo' />
      </section>

      <section className='navItems'>
        <article className='nav'>
          <ul className='navList'>
            <li><a href='#' className='navLink'>Eléctrico</a></li>
            <li><a href='#' className='navLink'>Maderas</a></li>
            <li><a href='#' className='navLink'>Químicos</a></li>
            <li><a href='#' className='navLink'>Contacto</a></li>
          </ul>
        </article>


        
        <CartWidget />
        

      </section>
    </nav>
  )
}

export default navBar