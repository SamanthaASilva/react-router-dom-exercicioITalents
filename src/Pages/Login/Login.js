import {Link, useNavigate} from 'react-router-dom';
import './style.css';

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/', {state: 1});
    }

    return(
        <div className='login'>
        <h1>Login</h1>
        <Link to='/' className='link'>Voltar</Link>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
            <label for="email">Email:</label>
            <input id="email" type="text" placeholder='Digite o e-mail'/>
            <br></br>
            <label for="password">Senha:</label>
            <input id="password" type="text" placeholder='Digite a senha'/>
            <button>Entrar</button>
        </form>
        </div>
    )
}

export default Login;