import style from "./projectsCard.module.css"
import img from "../../../assets/git-icon.png";


export function ProjectsCard({ project }) {
    return (
        <li className={style.projectList__item} key={project.name}>
            <div className={style.projectList__content}>
                <h2 className="project-list__title">{project.name}</h2>
                <p className="project-list__text">{project.description}</p>
                <a className="project-list__link" href="#">Saiba mais</a>
            </div>
            <div className="project__img">
                <img src={img}/>
            </div>
            
        </li>
    )
}