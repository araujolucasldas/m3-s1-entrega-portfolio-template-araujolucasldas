import style from "./about.module.css"

export function AboutMeSection() {
    return (
        <>
            <section className={style.about__container}>
                <h1 className="about__title">Sobre mim</h1>
                <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
            </section>
        </>
    )
}