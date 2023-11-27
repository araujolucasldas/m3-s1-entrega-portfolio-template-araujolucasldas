import style from "./techCard.module.css"

export function TechCard({tech}) {
    return (
        <li className={style.techList__item} key={tech.name}>
            <img src={tech.img} className="tech__img" />
            <p className="tech__text">{tech.name}</p>
        </li>
    )
}