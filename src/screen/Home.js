import { useState } from "react";
import { NavLink } from "react-router-dom";

const styles = {
    main: {
        position: "relative"
    },
    insidemain1: {
        position: "absolute",
        top: "0px",
        bottom: "0px",
        left: "0px",
        right: "0px"
    },
    insidemain2: {
        height: "100%"
    },
    insidemainmob: {
        height: "100%"
    },
    mainButton: {
        backgroundColor: "#db6a1f",
        color: "#ffffff"
    },
    mainButtonHover: {
        backgroundColor: "#ffffff",
    },

    download: {
        backgroundColor: "#db6a1f",
        color: "#ffffff",
        border: "2px solid #ffffff"
    },
    downloadHover: {
        backgroundColor: "#ffffff",
        color: "#db6a1f",
        border: "2px solid #ffffff"
    },

    project: {
        color: "#000000",
        border: "2px solid #000000"
    },
    projectHover: {
        backgroundColor: "#000000",
        color: "#ffffff",
        border: "2px solid #000000"
    },

    contactButton1: {
        backgroundColor: "#1b1b1b",
        color: "#ffffff"
    },
    contactButton2: {
        backgroundColor: "#ffffff",
        color: "#000000"
    },
}

function Home() {

    const [mainButton, setMainButton] = useState(false);

    const [download, setDownload] = useState(false);

    const [project, setProject] = useState(false);

    function pdfFn() {
        const link = document.createElement("a");
        link.href = "MohammadHasan.pdf";
        link.download = "MohammadHasan.pdf";
        link.click();
    }

    return (
        <>
            <section style={styles.main} id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 p-0">
                            <img className="img-responsive" src="main.jpg" alt="Not found" />
                        </div>
                    </div>
                </div>
                <div style={styles.insidemain1} className="container-fluid">
                    <div style={styles.insidemain2} className="row d-sm-flex d-none align-items-center">
                        <div className="col-sm-1"></div>
                        <div className="col-md-6 col-sm-10">
                            <h2 className="fw-bold">MOHAMMAD HASAN</h2>
                            <p className="fw-bold py-2">mern stack developer with holding 1 year of experience. Passionate about learning new technologies and skills. As mern stack developer masters in develop full stack web applications and host to a web application.</p>
                            <NavLink to="/about"><button style={mainButton ? styles.mainButton : styles.mainButtonHover} onMouseEnter={() => { setMainButton(true) }} onMouseLeave={() => { setMainButton(false) }} className="btn fw-bold rounded-0 px-5">MORE ABOUT ME</button></NavLink>
                        </div>
                    </div>
                    <div style={styles.insidemainmob} className="row d-sm-none d-flex align-items-center">
                        <div className="col-12">
                            <h2 className="fw-bold text-center">MOHAMMAD HASAN</h2>
                            <p className="fw-bold text-center about-text-mob py-2">mern stack developer with holding 1 year of experience. Passionate about learning new technologies and skills. As mern stack developer masters in develop full stack web applications and host to a web application.</p>
                            <div className="d-sm-none d-block">
                                <NavLink to="/about"><button style={mainButton ? styles.mainButton : styles.mainButtonHover} onMouseEnter={() => { setMainButton(true) }} onMouseLeave={() => { setMainButton(false) }} className="btn fw-bold form-control fs-5 rounded-0 px-5">MORE ABOUT ME</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="resume">
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5 className="text-center fw-bold mb-3">CLICK HERE FOR DOWNLOAD RESUME</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <button style={download ? styles.downloadHover : styles.download} onClick={() => { pdfFn() }} onMouseEnter={() => { setDownload(true) }} onMouseLeave={() => { setDownload(false) }} className="btn fw-bold form-control shadow-none rounded-0">DOWNLOAD</button>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="container-fluid py-5">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-3 mx-3 my-sm-0 my-4">
                            <img src="project.jpg" alt="Not found" />
                            <p className="text-center d-sm-block d-none fw-bold mt-3 mb-0">AHMADIYA MADARSA</p>
                            <p className="text-center d-sm-none d-block fw-bold mt-3 fs-5 mb-0">AHMADIYA MADARSA</p>
                        </div>
                        <div className="col-sm-3 mx-3 my-sm-0 my-4">
                            <img src="project.jpg" alt="Not found" />
                            <p className="text-center d-sm-block d-none fw-bold mt-3 mb-0">STUDYPOINT</p>
                            <p className="text-center d-sm-none d-block fw-bold mt-3 fs-5 mb-0">STUDYPOINT</p>
                        </div>
                        <div className="col-sm-3 mx-3 my-sm-0 my-4">
                            <img src="project.jpg" alt="Not found" />
                            <p className="text-center d-sm-block d-none fw-bold mt-3 mb-0">CITYPARKING</p>
                            <p className="text-center d-sm-none d-block fw-bold mt-3 fs-5 mb-0">CITYPARKING</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <NavLink to="/project">
                                <button style={project ? styles.projectHover : styles.project} onMouseEnter={() => { setProject(true) }} onMouseLeave={() => { setProject(false) }} className="btn fw-bold form-control shadow-none rounded-0 mt-sm-5 mt-3">SEE ALL PROJECTS</button>
                            </NavLink>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </section>

            <section id="skills">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="text-center fw-bold my-4">SKILLS SET</h2>
                        </div>
                        <div className="col-sm-12">
                            <ul>
                                <li className="fw-normal d-block py-3 fw-bold">HTML5 <img className="ms-4" src="html5.png" alt="Not found" /></li>
                                <li className="fw-normal d-block py-3 fw-bold">CSS3 <img className="ms-4" src="css3.png" alt="Not found" /></li>
                                <li className="fw-normal d-block py-3 fw-bold">BOOTSTRAP5 <img className="ms-4" src="bootstrap.png" alt="Not found" /></li>
                                <li className="fw-normal d-block py-3 fw-bold">MONGODB <img className="ms-4" src="mongodb.png" alt="Not found" /></li>
                                <li className="fw-normal d-block py-3 fw-bold">REACTJS <img className="ms-4" src="react.png" alt="Not found" /></li>
                                <li className="fw-normal d-block py-3 fw-bold">NODEJS <img className="ms-4" src="node.png" alt="Not found" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container-fluid">
                    <div className="row pb-4">
                        <div className="col-sm-12">
                            <h2 className="text-center fw-bold my-4">CONTACT ME</h2>
                        </div>
                        <div className="col-sm-12 my-1">
                            <button style={styles.contactButton1} className="btn col-sm-2 col-3 fw-bold rounded-0">EMAIL</button>
                            <button style={styles.contactButton2} className="btn col-sm-4 col-9 fw-bold rounded-0">hasanprince0786@gmail.com</button>
                        </div>
                        <div className="col-sm-12 my-1">
                            <button style={styles.contactButton1} className="btn col-sm-2 col-3 fw-bold rounded-0">PHONE</button>
                            <button style={styles.contactButton2} className="btn col-sm-4 col-9 fw-bold rounded-0">7737008346</button>
                        </div>
                        <div className="col-sm-12 my-1">
                            <button style={styles.contactButton1} className="btn col-sm-2 col-3 fw-bold rounded-0">Linkedin link</button>
                            <NavLink to="https://www.linkedin.com/in/mohammad-hasan-92053523a/"><button style={styles.contactButton2} className="btn col-sm-4 col-9 fw-bold rounded-0">linkedin.com/in/mohammad-hasan-92053523a</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <p className="text-center fw-bold my-2">MOHAMMAD HASAN'S PORTFOLIO</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
