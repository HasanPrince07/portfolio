import { useState } from "react";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
    { path: "/", label: "home" },
    { path: "/about", label: "about" },
    { path: "/project", label: "projects" }
];

function Header() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(prev => !prev);

    return (
        <>
            <header id="header" className="py-sm-4 py-2 shadow-sm">
                <div className="container-fluid">
                    <div className="row d-sm-flex d-none justify-content-center">
                        {NAV_LINKS.map((link) => (
                            <div key={link.path} className="col-md-2 col-3 text-center">
                                <NavLink
                                    to={link.path}
                                    className="text-decoration-none text-uppercase rounded-1 d-block fw-bold py-2"
                                >
                                    {link.label}
                                </NavLink>
                            </div>
                        ))}
                    </div>
                    <div className="row d-sm-none d-flex justify-content-end">
                        <div className="col-2">
                            <img
                                onClick={toggleModal}
                                src="media/menu.png"
                                alt="Toggle Menu"
                            />
                        </div>
                    </div>
                    {isModalOpen && (
                        <div className="row d-sm-none d-flex mt-2">
                            {NAV_LINKS.map((link) => (
                                <div key={link.path} className="col-sm-12 my-1">
                                    <NavLink
                                        onClick={toggleModal}
                                        to={link.path}
                                        className="text-decoration-none text-uppercase d-block rounded-1 fw-bold py-1 px-3"
                                    >
                                        {link.label}
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}

export default Header;