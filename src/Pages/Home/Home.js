import {Link, useLocation} from 'react-router-dom';
import banner from '../../assets/bannermake.png';
import iconlipstick from '../../assets/iconlipstick.png';
import iconshadowpalette from '../../assets/iconshadowpalette.png';
import iconbrush from '../../assets/iconbrush.png';
import './style.css';

const Home = () => {
    const location = useLocation();

    return(
        <>
            <img src={banner} alt='banner' className='home-banner'></img>
        <div className='navigation-pages'>
            <Link to='/login' className='link'>Login</Link>
            <br></br>
            <Link to='/contato' className='link'>Contato</Link>
            <br></br>
            <Link to='/products' className='link'>Produtos</Link>
        </div>
        <div className='menu-tab'>
            <img src={iconlipstick} alt='icon' className='icon-lipstick'></img>
            <span>Batom</span>
        </div>
        <div className='menu-tab'>
            <img src={iconshadowpalette} alt='icon' className='icon-palette'></img>
            <span>Paleta de Sombras</span>
        </div>
        <div className='menu-tab'>
            <img src={iconbrush} alt='icon' className='icon-brush'></img>
            <span>Pincel</span>
        </div>
            {location.state > 0 &&
            <h3>Usuário logado com sucesso!</h3>
            }
       
        </>
    )
}

export default Home;