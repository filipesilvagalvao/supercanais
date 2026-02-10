import styles from './page.module.css'
import Post_Card from "@/componets/post_card/Post_Card";
import getChannels from "@/functions/getChanels";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css'


export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {

  const params = await searchParams


  const data = await getChannels() || []

  const page = params["page"] ?? 1

  const per_page = params["per_page"] ?? 21

  const start = (Number(page) - 1) * Number(per_page) //0, 5, 10 ...
  const end = start + Number(per_page) //5, 10, 15 ...

  const posts = data.slice(start, end)

  const prev_link = (Number(page) === 1
    ?
    `/?page=${Math.round(data.length / Number(per_page))}&per_page=${per_page}`
    :
    `/?page=${Number(page) - 1}&per_page=${per_page}`)

  const next_link = (Number(page) === (Math.round(data.length / Number(per_page)))
    ?
    `/`
    :
    `/?page=${Number(page) + 1}&per_page=${per_page}`)

  const allPages = Math.round(data.length / Number(per_page))

  return (
    <main className={styles.page}>
      <h2 className='h1'>TV online</h2>
      <section className={styles.page__content}>
        <div className={styles.page__posts}>
          {
            posts?.map((post) => (
              <Post_Card
                title={post.title}
                cover={"/thumbs/" + post.cover}
                key={post.title}
              />
            ))
          }
        </div>
        <div className={styles.page__navigation}>
          <Link href={prev_link}><i className="fa-solid fa-angle-left"></i>PREV</Link>
          <span> {page} / {allPages} </span>
          <Link href={next_link}>NEXT<i className="fa-solid fa-angle-right"></i></Link>
        </div>

        <div className={styles.page__text}>
          <p>
            Este site oferece uma ampla seleção de canais e webcanais de diversas categorias. Nosso compromisso é disponibilizar apenas <strong>conteúdos livres</strong>, evitando a exibição de materiais protegidos por direitos autorais. O Supercanais reúne canais de TV local e WebTVs com programação variada, incluindo desenhos, conteúdos nostálgicos, notícias, filmes, séries e atrações da TV aberta.
          </p>

          <p>
            O site também conta com uma barra de pesquisa para facilitar a navegação, permitindo buscar canais por nome ou categoria, além de links organizados por temas.
          </p>

        </div>

      </section>

    </main>
  );
}
