import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <div className="w3-top">
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                <NavLink to="/" className="w3-bar-item w3-button"><b>DC</b> Architects</NavLink>
                {/* <!-- Float links to the right. Hide them on small screens --> */}
                <div className="w3-right w3-hide-small">
                    <NavLink to="/projects" className="w3-bar-item w3-button">Projects</NavLink>
                    <NavLink to="/services" className="w3-bar-item w3-button">Services</NavLink>
                    <NavLink to="/about" className="w3-bar-item w3-button">About</NavLink>
                    <NavLink to="/contact" className="w3-bar-item w3-button">Contact</NavLink>
                    <NavLink to="/login" className="w3-bar-item w3-button" style={{ backgroundColor: 'black', color: 'white' }}>
                        Join us now
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar