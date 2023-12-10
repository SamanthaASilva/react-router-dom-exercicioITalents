import {Link} from 'react-router-dom';

const Contato = () => {
    return(
        <div className='contact'>
        <h1>Contato</h1>
        <Link to='/' className='link'>Voltar</Link>
        <br></br>
        <Link to='/products' className='link'>Produtos</Link>
        </div>
    )
}

export default Contato;