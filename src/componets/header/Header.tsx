import Link from "next/link"
import styles from "./Header.module.css"
import Search from "./search/Search"

function Header() {
    return (
        <header className={styles.header}>

            <div className={styles.header__container}>

                <h1 className={styles.header__logo}>
                    <Link href="/">
                        <span>Super</span>Canais<i className="fa-regular fa-circle-play"></i>
                    </Link>
                </h1>

                <Search/>

            </div>

            <nav className={styles.header__nav}>
                <Link href="/">Home</Link>
                <Link href="/categoria/tv-aberta">TV Aberta</Link>
                <Link href="/categoria/filmes">Filmes</Link>
                <Link href="/categoria/series">Séries</Link>
                <Link href="/categoria/variedades">Variedades</Link>
                <Link href="/categoria/desenhos">Desenhos</Link>
                <Link href="/categoria/documentarios">Documentários</Link>
                <Link href="/categoria/noticias">Notícias</Link>
                <Link href="/categoria/esportes">Esportes</Link>
                <Link href="/categoria/webtv">WebTV</Link>
            </nav>
        </header>
    )
}

export default Header