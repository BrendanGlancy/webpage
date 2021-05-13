import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const location = useLocation();

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if (width > 800) {
            setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    const handleClose = () => {
        if (screenWidth < 800) {
          setOpen(false);
        }
    };


    return (
        <nav className="navbar">
        <div className="nav-wrapper">
            <div className="logo">
                <Link to="/webpage/">
                    <img src={`${process.env.PUBLIC_URL}/logo.png`}
                    rel="noreferrer" alt="logo"/>
                </Link>
            </div>
            <div className="list-wrapper">
                 <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0}}
            onClick={ () => {
                setOpen(!open);
                     }}
          />
                <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={ () => {
                setOpen(!open);
                    }}
          />

                <ul style={{ left: open ? "0" : "-100vw" }}>
                    <li>
                        <Link 
                        onClick={handleClose}
                        style={{ color: location.pathname === "/webpage/" && "#4071f4" }}
                        to="/webpage/">Home</Link>
                    </li>
                    <li>
                        <Link
                        onClick={handleClose}
                        style={{ color: location.pathname === "/about" && "#4071f4" }}
                        to="/about">About</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClose}
                        style={{ color: location.pathname === "/skills" && "#4071f4" }}
                        to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClose}
                        style={{ color: location.pathname === "/works" && "#4071f4" }}
                        to="/works">Work</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={handleClose}
                        style={{ color: location.pathname === "/contact" && "#4071f4" }}
                        to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
    );
};


export default NavBar;
