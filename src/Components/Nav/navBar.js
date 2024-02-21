import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faUser} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
function NavbarN() {
    const [showMenu, setShowMenu] = useState(true);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className='header'>
            <h2>MediaConnect</h2>
            <nav className="navbar1" style={{ clipPath: showMenu ? 'polygon(0 0,100% 0, 100% 100%, 0 100%)' : 'polygon(0 0,100% 0, 0 0)' }}>
                
                <Link to={"/"} className='a active'>Home</Link>
                <Link to={"/chatt"} className='a'>Chatt</Link>
                <Link to={"/connect"} className='a'>Connect</Link>
                <Link to={""} className='a'>Job</Link>
                <Link to={""} className='a'>Practice</Link>
                <Link to={""} className='a red'>Emergency</Link>
            </nav>
            <div className='icons'>
                <Link to={"/profile"}><FontAwesomeIcon className='i' icon={faUser}/></Link>
                <FontAwesomeIcon className='i menubar' icon={faBars} size='2xs' id='bars' onClick={toggleMenu} />
            </div>
        </div>
    );
}
export default NavbarN;