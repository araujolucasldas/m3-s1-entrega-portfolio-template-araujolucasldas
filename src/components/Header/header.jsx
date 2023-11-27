import style from "./header.module.css"
import logo from "../../assets/portfolio.png";
export function Header() {
    return (
        <>
            <header className={style.header__container}>
                <div className="header-img__container">
                <img src={logo} alt="Logo do portfólio" />
                </div>
                <ul className={style.header__links}>
                    <li className="links__item">
                        <a href="#" className="header__link">Sobre</a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="header__link">Stack</a>
                    </li>
                    <li className="links__item">
                        <a href="#" className="header__link">Projetos</a>
                    </li>
                </ul>
                <button className="button button--header">Contato</button>
            </header>
        </>
    )
}