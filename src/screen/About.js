function About() {
    return (
        <>
            <section id="aboutpage">
                <div className="container">
                    <div className="row d-flex align-items-center my-5">
                        <div className="col-sm-6">
                            <h2 className="d-sm-block d-none fw-bold px-3 py-1">MOHAMMAD HASAN</h2>
                            <h2 className="d-sm-none d-block fw-bold text-center py-1">MOHAMMAD HASAN</h2>
                            <p className="fw-normal d-sm-block d-none px-3 mb-0">I am a mern stack developer with holding 1 year of experience. Passionate about learning new technologies and skills. As mern stack developer specialize in develop full stack web applications using programing language like react, node and mongodb and host to a web application. I can Handle database like mongodb and have a good communication skills.</p>
                            <p className="fw-normal d-sm-none d-block text-center aboutpage-text-mob mb-4">I am a mern stack developer with holding 1 year of experience. Passionate about learning new technologies and skills. As mern stack developer specialize in develop full stack web applications using programing language like react, node and mongodb and host to a web application. I can Handle database like mongodb and have a good communication skills.</p>
                        </div>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4 px-sm-2 px-5">
                            <img src="profilepic.png" alt="Not found" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div className="container-fluid">
                    <div className="row px-sm-5 px-2">
                        <div className="col-sm-12">
                            <h2 className="text-center my-4">EXPERIENCE</h2>
                        </div>
                        <div className="col-sm-12">
                            <h5 className="fw-bold text-center col-sm-3 py-2">AkashITHub (Ajmer)</h5>
                            <p className="d-sm-block d-none">As a full stack developer my role is in this company was develop user friendly website, handle database and develop a backend. I was done many projects in this company. I was work with this company almost 1 year.</p>
                            <p className="d-sm-none d-block text-center experience-text-mob">As a full stack developer my role is in this company was develop user friendly website, handle database and develop a backend. I was done many projects in this company. I was work with this company almost 1 year.</p>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <h5 className="fw-bold text-center col-sm-3 py-2">Grass Solutions (Jaipur)</h5>
                            <p className="d-sm-block d-none">I was did 6 month of full stack developer training in this institute and develop many diffrent type of projects in this insitute.</p>
                            <p className="d-sm-none d-block text-center experience-text-mob">I was did 6 month of full stack developer training in this institute and develop many diffrent type of projects in this insitute.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;