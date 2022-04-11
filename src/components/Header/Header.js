import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const signOutFun = () =>{
        signOut(auth);
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {/* <Link to="/login">Login</Link> */}
                {
                    user ? <button className='button' onClick={signOutFun}>log-out</button>
                        : <Link to="/Login">Login</Link>
                }
            </div>
        </nav>
    );
};

export default Header;