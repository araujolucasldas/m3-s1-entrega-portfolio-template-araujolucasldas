import style from "./footer.module.css"
import imgWhatsapp from "../../assets/whatsapp-icon.png";
import imgLikedin from "../../assets/linkedin-icon.png";
import imgGithub from "../../assets/github-icon.png";

export function Footer() {
    return (
        <>
            <footer className={style.footer}>
                <div className={style.footer__content}>
                <h2 className="footer__title">Contato</h2>
                <ul className={style.footer__list}>
                    <li className="list__item">
                        <img src={imgWhatsapp} />
                    </li>
                    <li className="list__item">
                        <img src={imgLikedin} />
                    </li>
                    <li className="list__item">
                        <img src={imgGithub} />
                    </li>
                </ul>
                </div>
                <p className={style.footer__text}>Todos os direitos reservados - José da Silva</p>
            </footer>
        </>
    )
}