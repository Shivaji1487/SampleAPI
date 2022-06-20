import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }

    return (
        <div>
            <img 
            alt="logo"
            className="logo"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXYYRYABG3VJT-qWlabSqqi8uzMm0qy-YQg&usqp=CAU'/>
            {auth ? <ul className="nav-ul">
                <li><Link to="/"> Product </Link></li>
                <li><Link to="/add"> Add Product </Link></li>
                <li><Link to="/update"> Update Product </Link></li>

                <li><Link to="/profile"> profile </Link></li>
                <li> <Link onClick={logout} to="/signup"> Logout ({JSON.parse(auth).name}) </Link> </li>

            </ul>
                :
                <ul>
                    <li className="nav-right"><Link to="/signup"> SignUp </Link></li>
                    <li className="nav-right"> <Link to="/login"> Login </Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;


