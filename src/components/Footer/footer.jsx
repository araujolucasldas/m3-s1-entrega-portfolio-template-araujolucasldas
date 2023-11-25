export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__content">
                <h2 className="footer__title">Contato</h2>
                <ul className="footer__list">
                    <li className="list__item">
                        <img src="./src/assets/whatsapp-icon.png" />
                    </li>
                    <li className="list__item">
                        <img src="./src/assets/linkedin-icon.png" />
                    </li>
                    <li className="list__item">
                        <img src="./src/assets/github-icon.png" />
                    </li>
                </ul>
                </div>
                <p className="footer__text">Todos os direitos reservados - José da Silva</p>
            </footer>
        </>
    )
}