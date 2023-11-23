export function ProjectsCard({ project }) {
    return (
        <li className="project-list__item">
            <div className="project-list_content">
                <h2 className="project-list__title">{project.name}</h2>
                <p className="project-list__text">{project.description}</p>
                <a className="project-list__link" href="#">Saiba mais</a>
            </div>
            <img src="./src/assets/git-icon.png"/>
        </li>
    )
}