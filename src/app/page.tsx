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
      <h1 className='h1'>Uma extensa lista de canais</h1>
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
          <p>Este site oferece uma extensa lista de canais e webcanais de várias categorias, procuramos não exibir conteúdos que contenha direitos autorais mas apenas <strong>conteúdos livres</strong>. O Supercanais exibe canais de tv local, webtv que mostra desenhos, programação nostágica, notícias, filmes, séries e demais da tv aberta.</p>
          <p>Caso encontre algum canal que <strong>inflige direitos autorais</strong>, nos peça para remover pelo <a href="https://t.me/thiagotavares123" target='_blank'><strong>telegram</strong></a>: <a href="https://t.me/thiagotavares123" target='_blank'><i className="fa-brands fa-telegram"></i>Thiago Tavares</a></p>
        </div>

      </section>

    </main>
  );
}
