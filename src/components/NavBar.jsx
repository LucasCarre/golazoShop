import CartWidget from "./CartWidget"

function Navbar (){
    return(
        <nav className="navbar">
            <h1>GOLAZO SHOP</h1>
            <ul className="navbar-links">
                <a>Camisetas</a>
                <a>Shorts</a>
                <a>Chombas</a>
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default Navbar