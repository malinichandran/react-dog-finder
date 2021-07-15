import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({dogs}) => {
return(
    <ul>
        {dogs.map(dog => (
            <li>
                <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
                    {dog.name}
                </NavLink>
            </li>
        ))}
    </ul>
)
}

export default NavBar;