import style from "./projects.module.css"

import { projects } from "../../data/projects.js"
import { ProjectsCard } from "./ProjectsCard/projectsCard.jsx"

export function ProjectsSection() {
    return (
        <>
            <section className={style.projects__container}>
                <h2 className="projects__title">Projetos</h2>
                <ul className={style.projects__list}>
                    {projects.map(project =>{
                        return (
                            <ProjectsCard project={project} key={project.name} />
                        )
                    })}
                </ul>
            </section>
        </>
    )
}