import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <h2>my site</h2>
            <Link to="/">home</Link>
        </nav>
    )
}

export default Navbar;