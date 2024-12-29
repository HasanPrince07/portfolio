import { useState } from "react";
import { NavLink } from "react-router-dom";

const styles = {
    links: {
        color: "#ffffff",
    },
    activeLink: {
        color: "#000000",
        backgroundColor: "#ffffff",
    },
}

function Header() {

    const [links, setLinks] = useState(null);

    const [modal, setModal] = useState(false);

    function modalFn() {
        if (modal === true) {
            setModal(false);
        } else {
            setModal(true);
        }
    }

    return (
        <>
            <section id="header">
                <div className="container-fluid">
                    <div className="row web-header d-sm-flex d-none justify-content-center align-items-center">
                        <div className="col-sm-2 text-center">
                            <NavLink style={links === 1 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(1) }} onMouseLeave={() => { setLinks(null) }} to="/" className="text-decoration-none d-block fw-bold py-1">HOME</NavLink>
                        </div>
                        <div className="col-sm-2 text-center">
                            <NavLink style={links === 2 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(2) }} onMouseLeave={() => { setLinks(null) }} to="/about" className="text-decoration-none d-block fw-bold py-1">ABOUT</NavLink>
                        </div>
                        <div className="col-sm-2 text-center">
                            <NavLink style={links === 3 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(3) }} onMouseLeave={() => { setLinks(null) }} to="/project" className="text-decoration-none d-block fw-bold py-1">PROJECTS</NavLink>
                        </div>
                    </div>
                    <div className="row d-sm-none d-flex justify-content-center align-items-center">
                        <div className="col-10"></div>
                        <div className="col-2 d-flex justify-content-center py-2">
                            <img onClick={() => { modalFn() }} src="headerbtn.png" alt="Not found" />
                        </div>
                    </div>
                    {modal ?
                        <div className="row pb-2">
                            <div className="col-sm-12 my-1">
                                <NavLink style={links === 1 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(1) }} onMouseLeave={() => { setLinks(null) }} to="/" className="text-decoration-none fw-bold links-mob px-3 py-1">HOME</NavLink>
                            </div>
                            <div className="col-sm-12 my-1">
                                <NavLink style={links === 2 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(2) }} onMouseLeave={() => { setLinks(null) }} to="/about" className="text-decoration-none fw-bold links-mob px-3 py-1">ABOUT</NavLink>
                            </div>
                            <div className="col-sm-12 my-1">
                                <NavLink style={links === 3 ? styles.activeLink : styles.links} onMouseEnter={() => { setLinks(3) }} onMouseLeave={() => { setLinks(null) }} to="/project" className="text-decoration-none fw-bold links-mob px-3 py-1">PROJECTS</NavLink>
                            </div>
                        </div>
                        : ""}
                </div>
            </section>
        </>
    );
}

export default Header;