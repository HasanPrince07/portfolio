import { NavLink } from "react-router-dom";

const styles = {
    project: {
        backgroundColor: "#1b1b1b"
    }
}

function Project() {
    return (
        <>
            <section id="projectpage">
                <div style={styles.project} className="container p-3 my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <img src="project.jpg" alt="Not found" />
                        </div>
                        <div className="col-sm-6">
                            <h4 className="fw-bold text-center pt-sm-0 pt-3">AHMADIYA MADARSA</h4>
                            <p className="text-center d-sm-block d-none">This website is for a school in which all the information of the school is available like school events, school facilities, many features are added in this website like user can give reviews and contact principal for any queries, in this project admin can control the whole website from admin panel, like changing the color of the website by logging in, controlling reviews, adding events and many more things.</p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">This website is for a school in which all the information of the school is available like school events, school facilities, many features are added in this website like user can give reviews and contact principal for any queries, in this project admin can control the whole website from admin panel, like changing the color of the website by logging in, controlling reviews, adding events and many more things.</p>
                            <p className="text-center d-sm-block d-none">Website link - <NavLink target="_blank" to="https://www.ahmadiyamadarsa.com">www.ahmadiyamadarsa.com</NavLink></p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">Website link - <NavLink target="_blank" to="https://www.ahmadiyamadarsa.com">www.ahmadiyamadarsa.com</NavLink></p>
                        </div>
                    </div>
                </div>
                <div style={styles.project} className="container p-3 my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <img src="project.jpg" alt="Not found" />
                        </div>
                        <div className="col-sm-6">
                            <h4 className="fw-bold text-center pt-sm-0 pt-3">KGN ELECTRODES</h4>
                            <p className="text-center d-sm-block d-none">This website is for a welding rod industrie in which all the information of the industrie is available like industrie product detail, industrie employee detail, many features are added in this website like user can apply for job, in this project admin can control the whole website from admin panel, like changing the color of the website by logging in, adding product detail and many more things.</p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">This website is for a welding rod industrie in which all the information of the industrie is available like industrie product detail, industrie employee detail, many features are added in this website like user can apply for job, in this project admin can control the whole website from admin panel, like changing the color of the website by logging in, adding product detail and many more things.</p>
                        </div>
                    </div>
                </div>
                <div style={styles.project} className="container p-3 my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <img src="project.jpg" alt="Not found" />
                        </div>
                        <div className="col-sm-6">
                            <h4 className="fw-bold text-center pt-sm-0 pt-3">CITYPARKING</h4>
                            <p className="text-center d-sm-block d-none">This website is for a parking lot in which many features are added in this website like admin can log in, adding cars detail, checkout bill and many more things.</p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">This website is for a parking lot in which many features are added in this website like admin can log in, adding cars detail, checkout bill and many more things.</p>
                            <p className="text-center d-sm-block d-none">GitHub link - <NavLink target="_blank" to="https://github.com/HasanPrince07/cityparking.git">https://github.com/HasanPrince07/cityparking.git</NavLink></p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">GitHub link - <NavLink target="_blank" to="https://github.com/HasanPrince07/cityparking.git">https://github.com/HasanPrince07/cityparking.git</NavLink></p>
                        </div>
                    </div>
                </div>
                <div style={styles.project} className="container p-3 my-5">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-6">
                            <img src="project.jpg" alt="Not found" />
                        </div>
                        <div className="col-sm-6">
                            <h4 className="fw-bold text-center pt-sm-0 pt-3">STUDYPOINT</h4>
                            <p className="text-center d-sm-block d-none">This website is for a coaching center.</p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">This website is for a coaching center.</p>
                            <p className="text-center d-sm-block d-none">GitHub link - <NavLink target="_blank" to="https://github.com/HasanPrince07/studypoint.git">https://github.com/HasanPrince07/studypoint.git</NavLink></p>
                            <p className="text-center d-sm-none d-block projectpage-text-mob">GitHub link - <NavLink target="_blank" to="https://github.com/HasanPrince07/studypoint.git">https://github.com/HasanPrince07/studypoint.git</NavLink></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;