import Styles from "./Banner.module.css"
import Logo from "../../assets/acervo-digital-logo.png"

export default function Banner() {
    return (
        <section className={Styles.bannerSection}>
            <article className={Styles.bannerArticle}>
                <figure className={Styles.bannerFigure}>
                    <img className={Styles.bannerImage} src={Logo} alt="Logo do Acervo Digital" />
                </figure>
            </article>
        </section>
    )
}
