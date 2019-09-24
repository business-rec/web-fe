import React from "react";

import { Link } from 'react-router-dom'

function Header() {
    return (
        <Container>
            <Link to="/login">
                <button>Logout</button>
            </Link>
        </Container>
    )
}

export default Header;