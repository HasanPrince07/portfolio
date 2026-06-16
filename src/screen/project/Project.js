import { NavLink } from "react-router-dom";
import "./Project.css";

const PROJECTS = [
    { image: "media/project_ahmadiya.webp", name: "ahmadiya madarsa", description: "A comprehensive school management website designed to provide detailed information about school events, facilities, and history. Features a dynamic user review system and a dedicated contact section for inquiries. Built with a powerful administrative control panel that allows full website customization, theme color adjustments, user review moderation, and event management.", link: "https://www.ahmadiyamadarsa.com", link_name: "ahmadiyamadarsa", web: true },
    { image: "media/project_kgn.webp", name: "kgn electrodes", description: "A professional industrial website developed for a welding rod manufacturing company to showcase product catalogs and industry details. Includes an active job application system for prospective employees. Equipped with a robust admin dashboard enabling complete site management, including direct product updates, theme customization, and content management.", link: "https://www.kgnelectrodes.com", link_name: "kgnelectrodes", web: true },
    { image: "media/project_ratnsangh.webp", name: "ratnasangh library", description: "A specialized library management web application designed to showcase comprehensive book catalogs and library details. Features a user-friendly system for book renting and availability tracking. Powered by a centralized administrative control panel that allows complete site customization, layout color tuning, and dynamic book inventory management.", link: "https://ratnasangh.com/", link_name: "ratnasanghlibrary", web: true },
    { image: "media/project_studypoint.webp", name: "studypoint", description: "An interactive web platform built for a coaching center to manage student onboarding and institute information. It includes features for course exploration, user authentication (Login/Signup), and showcases information about web development and academic training programs.", link: "https://github.com/HasanPrince07/studypoint.git", link_name: "studypoint", web: false },
    { image: "media/project_cityparking.webp", name: "cityparking", description: "A smart parking management system designed to streamline vehicle tracking and operations. Features secure administrative login for staff to manage real-time parking spaces. Equipped with modules for registering incoming vehicles with details, calculating parking durations, automatic billing at checkout, and maintaining an structured log of entries.", link: "https://github.com/HasanPrince07/cityparking.git", link_name: "cityparking", web: false },
];

function Project() {
    return (
        <>
            <section id="projectpage" className="py-sm-5 py-0">
                <div className="container-fluid">
                    {PROJECTS.map((project) => (
                        <div key={project.name} className="row align-items-center py-4 mt-5">
                            <div className="col-md-1"></div>
                            <div className="col-md-5 col-sm-6 col-12 pe-md-5">
                                <img src={project.image} alt="not-found" fetchPriority="high" />
                            </div>
                            <div className="col-md-5 col-sm-6 col-12 ps-md-5 mt-sm-0 mt-4">
                                <h4 className="fw-bold text-center text-uppercase">{project.name}</h4>
                                <p className="text-center">{project.description}</p>
                                <p className="text-center">{project.web ? "Website" : "GitHub"} link - <NavLink target="_blank" to={project.link}>{project.link_name}</NavLink></p>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Project;