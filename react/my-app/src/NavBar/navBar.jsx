import {Link} from 'react-router-dom';
import './navBar.css'

const NavBar =() => {
    return (
        <nav className='navBar'>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/images'> Image gallery </Link>
                </li>
                <li>
                    <Link to='/contact'> Contact </Link>
                </li>
                <li></li>
            </ul>
        </nav>
    )
}
export default NavBar
