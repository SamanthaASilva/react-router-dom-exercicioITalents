import {Link, useParams} from 'react-router-dom';

const Product = () => {
    const params = useParams();
    return(
        <div>
        <h1>Product</h1>
        <h2>Esse é o produto {params.id}</h2>
        <br></br>
        <Link to='/product/1'>Produto 1</Link>
        <br></br>
        <Link to='/product/2'>Produto 2</Link>
        <br></br>
        <Link to='/product/3'>Produto 3</Link>
        <br></br>
        </div>
    )
}

export default Product;