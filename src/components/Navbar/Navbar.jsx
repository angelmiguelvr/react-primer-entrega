import logo from '../../image/Tlapalerias.png';
import './navbar.css';



export const Navbar = () => {
	return (
		<header className="c-header">
			<div className="container">
					<img className="c-header__logo" src={logo} alt="logo"/>

				<nav>
					
					<ul className="c-header__lista">
						<li className="c-header__item">Inicio</li>
						<li className="c-header__item">Productos</li>
						<li className="c-header__item">Contacto</li>
						<li className="c-header__bars" ><span class="material-symbols-outlined">menu</span></li>
						<li className="c-header__car" ><span className="material-symbols-outlined">garden_cart</span></li>
					</ul>

				</nav>
			</div>
		</header>
	)
}