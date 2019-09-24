import React from "react";

import { Link } from 'react-router-dom'

function Header() {
    return (

            <Link to="/login">
                <button>Logout</button>
            </Link>

    )
}

export default Header;