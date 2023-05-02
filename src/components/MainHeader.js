import { NavLink } from 'react-router-dom';

import './MainHeader.css';

const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/about-us'>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/shop'>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/contact-us'>Contact Us</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;