export function TechCard({tech}) {
    return (
        <li className="tech-list__item">
            <img src={tech.img} className="tech__img" />
            <p className="tech__text">{tech.name}</p>
        </li>
    )
}