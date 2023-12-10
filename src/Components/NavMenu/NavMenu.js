import {Link} from 'react-router-dom';
import './style.css';

const NavMenu = () => {
    return(
        <nav>
            <div className='slogan'>
            <h1>Glow Up</h1>  
            <span>Bem vindo a loja mais famosa do Brasil</span>    
            </div>
            {/* <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                <Link to='/login'>Login</Link>
                </li>
                <li>
                <Link to='/contato'>Contato</Link>
                </li>
            </ul> */}
        </nav>
    )
}

export default NavMenu;