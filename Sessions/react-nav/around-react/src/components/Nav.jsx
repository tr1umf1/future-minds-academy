import react from "react"

export default function Nav(props) {
    return (
        <div className="container-fixed container-res gap-4">
            <header className="row align-center">
                <div className="col">
                    <nav className="navbar gap-2">
                        <img src="assets/images/logo.svg" alt="Around-Logo" className="navbar-logo" />
                        <ul className="navbar-menu remove-tablet">
                            <li><a href="index.html" className={props.active}>Home</a></li>
                            <li><a href="about-us.html">About us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog Details</a></li>
                            <li><a href="contact-us.html">Contact us</a></li>
                        </ul>
                        <div className="navbar-button remove-tablet">
                            <img src="assets/images/sun.png" alt="" />
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                            </label>
                            <img src="assets/images/moon.png" alt=""/>
                            <button className="normal-btn button-primary">Contact us</button>
                        </div>
                        <div className="nav-burger block-tablet">
                            <span className="material-icons" id="menu-icon">menu</span>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}
