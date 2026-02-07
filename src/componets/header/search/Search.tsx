'use client'
import { ChangeEvent, useState } from "react"
import styles from "./Search.module.css"
import { useRouter } from "next/navigation"

function Search() {
    const [query, setQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: ChangeEvent) => {
        e.preventDefault()
        if (!query.trim()) return

        router.push(`/pesquisar?q=${encodeURIComponent(query)}`)

        setQuery("")
    }

    return (
        <search className={styles.header__search}>

            <form className={styles.header__form}  onSubmit={handleSearch}>

                <input
                    type="search"
                    placeholder="Buscar conteúdo..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <button type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>

            </form>

        </search>
    )
}

export default Search