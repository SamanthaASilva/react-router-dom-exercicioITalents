import {Link, useSearchParams} from 'react-router-dom';
import './style.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return(
        <div className='products'>
        <h1>Produtos</h1>
        <Link to='/' className='link'>Voltar</Link>
        <h2>Produto: {searchParams.get('page')}</h2>
        <br></br>
        <Link to='/product/1' className='link'>Produto 1</Link>
        <br></br>
        <Link to='/product/2' className='link'>Produto 2</Link>
        <br></br>
        <Link to='/product/3' className='link'>Produto 3</Link>
        <br></br>
        <button onClick={() => {setSearchParams({page: 1})}}>1</button>
        <button onClick={() => {setSearchParams({page: 2})}}>2</button>
        <button onClick={() => {setSearchParams({page: 3})}}>3</button>
        </div>
    )
}

export default Products;