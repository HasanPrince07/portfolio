import { useNavigate } from "react-router-dom";
import "./Home.css";

const PROJECTS = [
    { title: "ahmadiya madarsa", image: "media/project_ahmadiya.webp" },
    { title: "kgnelectrodes", image: "media/project_kgn.webp" },
    { title: "ratnsangh library", image: "media/project_ratnsangh.webp" },
];

const SKILLS = [
    { name: "html5", image: "media/html5.png" },
    { name: "css3", image: "media/css3.png" },
    { name: "bootstrap5", image: "media/bootstrap.png" },
    { name: "mongodb", image: "media/mongodb.png" },
    { name: "reactjs", image: "media/react.png" },
    { name: "nodejs", image: "media/node.png" },
];

const CONTACT = [
    { name: "hasanprince0786@gmail.com", image: "media/email.png", link: false },
    { name: "+91 7737008346", image: "media/phone-call.png", link: false },
    { name: "Merta City, Rajasthan", image: "media/gps.png", link: false },
    { name: "https://linkedin.com/in/mohammad-hasan-92053523a", image: "media/linkedin.png", link: true },
];

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <main>
                <section id="main" className="p-sm-3 p-1">
                    <div className="container-fluid p-0">
                        <img className="img-responsive rounded-2" src="media/main.webp" alt="main" fetchPriority="high" />
                    </div>
                    <div className="container-fluid inside-div1">
                        <div className="row align-items-center h-100">
                            <div className="col-md-6 col-sm-9 col-12 text-center text-sm-start offset-sm-1">
                                <h1 className="text-uppercase fw-bold mb-sm-3 mb-1">Mohammad Hasan</h1>
                                <p className="mb-sm-4 mb-2">
                                    MERN Stack Developer with 1 year of experience. Passionate about learning new technologies and skills. Mastered in developing and hosting full-stack web applications.
                                </p>
                                <button onClick={() => navigate('/about')} className="btn text-uppercase fw-bold rounded-0 px-5 py-sm-2 py-1">
                                    More About Me
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="download">
                    <div className="container-fluid py-sm-5 py-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="text-center text-uppercase fw-bold mb-sm-4 mb-3">click here to download resume</h2>
                                <div className="d-flex justify-content-center">
                                    <a href="media/MohammadHasan.pdf" download="MohammadHasan.pdf" className="btn fw-bold text-uppercase rounded-0 px-5 py-sm-2 py-1">
                                        Download
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="text-center text-uppercase fw-bold">my projects</h2>
                        </div>
                        <div className="row justify-content-center mt-md-5 mt-3 mb-md-5 mb-sm-3 mb-0">
                            {PROJECTS.map((project) => (
                                <div key={project.title} className="col-md-4 col-sm-6 col-12 px-md-5 px-4 py-md-0 py-3">
                                    <img src={project.image} alt={project.image} />
                                    <p className="text-center text-uppercase fw-bold mt-3 mb-0">{project.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="row justify-content-center">
                            <button onClick={() => navigate("/project")} className="btn col-md-3 col-sm-4 col-6 fw-bold text-uppercase rounded-0">
                                see all projects
                            </button>
                        </div>
                    </div>
                </section>

                <section id="skills">
                    <div className="container-fluid py-sm-5 py-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="text-center text-uppercase fw-bold">skills set</h2>
                            </div>
                            <div className="col-sm-12">
                                <ul className="m-0 ps-sm-5 ps-2">
                                    {SKILLS.map((skill) => (
                                        <li key={skill.name} className="text-uppercase d-block fw-bold mt-4">{skill.name} <img className="ms-4" src={skill.image} alt={skill.name} /></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="d-flex justify-content-center col-md-5 col-sm-8 col-10 shadow-lg py-sm-4 py-2 px-md-0 px-sm-5 px-4 shadow-div">
                                <ul className="m-0 ps-0">
                                    {CONTACT.map((contact) => (
                                        <li key={contact.name} className="d-block my-3"><img className="me-sm-3 me-2" src={contact.image} alt={contact.name} />{contact.link ? <a href={contact.name} target="_blank" rel="noreferrer">{contact.name}</a> : `${contact.name}`}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;
