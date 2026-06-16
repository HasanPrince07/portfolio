import "./About.css";

const EXPERIENCE = [
    { year: "2024 - present", name: "fintech it solutions, jodhpur", description: "Working as a Full Stack Developer, responsible for building user-friendly web applications, managing databases, and developing robust backend systems. Successfully delivered multiple projects, ensuring high performance and seamless user experience." },
    { year: "2023 - 2024", name: "akashithub, ajmer", description: "Worked as a Full Stack Developer, where I designed responsive frontends and integrated secure backend APIs. Collaborated on various client projects, handled database management, and contributed to full-cycle web development during my one-year tenure." },
    { year: "2022 - 2023", name: "grrass solution, jaipur", description: "Completed intensive professional training in Full Stack Development. Gained hands-on experience in modern frontend technologies, backend frameworks, and database architecture through practical project builds." },
];

const EDUCATION = [
    { year: "2025 - present", name: "vivekanand global university, jaipur", description: "Currently pursuing a Master of Computer Applications (MCA). Focusing on advanced software development, data structures, and modern computing technologies to strengthen my technical expertise." },
    { year: "2019 - 2021", name: "marudhar defence school, merta city", description: "Completed Higher Secondary Education in the Science stream, securing 75% marks." },
];

function About() {
    return (
        <>
            <main>
                <section id="aboutpage">
                    <div className="container-fluid">
                        <div className="row d-flex align-items-center">
                            <div className="offset-md-1 col-md-6 col-sm-8 col-12">
                                <h2 className="text-sm-start text-center text-uppercase fw-bold rounded-1 px-3 py-2">mohammad hasan</h2>
                                <p className="text-sm-start text-center px-3 mb-sm-0 mb-3">I am a mern stack developer with holding 1 year of experience. Passionate about learning new technologies and skills. As mern stack developer specialize in develop full stack web applications using programing language like react, node and mongodb and host to a web application. I can Handle database like mongodb and have a good communication skills.</p>
                            </div>
                            <div className="offset-md-1 col-md-3 col-sm-4 col-12 d-flex justify-content-center">
                                <img src="media/profilepic.webp" alt="not-found" fetchPriority="high" />
                            </div>
                            <div className="col-md-1 col-0"></div>
                        </div>
                    </div>
                </section>

                <section id="education">
                    <div className="container-fluid py-sm-5 py-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="text-center text-uppercase fw-bold">my education</h2>
                            </div>
                        </div>
                        {EDUCATION.map((education) => (
                            <div key={education.name} className="row align-items-center div1 rounded-1 py-3 mx-md-5 mx-3 mx-0 mt-sm-5 mt-4">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">
                                    <h3 className="fw-bold">{education.year}</h3>
                                </div>
                                <div className="col-md-2 col-sm-1 col-0"></div>
                                <div className="col-md-6 col-sm-7 col-12 mt-sm-0 mt-2">
                                    <h4 className="text-uppercase fw-bold mb-sm-2 mb-1">{education.name}</h4>
                                    <p className="m-0">{education.description}</p>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="experience">
                    <div className="container-fluid py-sm-5 py-4">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="text-center text-uppercase fw-bold">my experience</h2>
                            </div>
                        </div>
                        {EXPERIENCE.map((experience) => (
                            <div key={experience.name} className="row align-items-center div1 rounded-1 py-3 mx-md-5 mx-3 mx-0 mt-sm-5 mt-4">
                                <div className="col-sm-1"></div>
                                <div className="col-sm-2">
                                    <h3 className="fw-bold">{experience.year}</h3>
                                </div>
                                <div className="col-md-2 col-sm-1 col-0"></div>
                                <div className="col-md-6 col-sm-7 col-12 mt-sm-0 mt-2">
                                    <h4 className="text-uppercase fw-bold mb-sm-2 mb-1">{experience.name}</h4>
                                    <p className="m-0">{experience.description}</p>
                                </div>
                                <div className="col-sm-1"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}

export default About;