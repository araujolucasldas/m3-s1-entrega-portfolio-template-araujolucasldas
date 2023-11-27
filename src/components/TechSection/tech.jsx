import style from "./tech.module.css"

import { technologies } from "../../data/technologies.js"
import { TechCard } from "./TechCard/techCard.jsx"

export function TechSection() {
    return (
        <>
            <section className={style.tech__container}>
                <h2 className="tech__title">Tecnologias</h2>
                <ul className={style.tech__list}>
                    {technologies.map(tech =>{
                        return (
                            <TechCard tech={tech} key={tech.name} />
                        )
                    })}
                </ul>
            </section>
        </>
    )
}