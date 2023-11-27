import style from "./banner.module.css"
import bannerImg from "../../assets/banner-img.png";


export function BannerSection() {
    return (
        <>
            <section className={style.banner__container}>
                <div className={style.banner__content}>
                <div className="banner__name">JOSEDASILVA</div>
                <h1 className="banner__title">Bem vindo ao meu portfólio</h1>
                <p className="banner__text">Uma frase interessante sobre mim</p>
                <button className="button button--banner">Saiba mais</button>
                </div>
                <img className={style.banner__img} src={bannerImg} />
            </section>
        </>
    )
}