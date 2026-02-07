import { PostProps } from "@/ts_types/ts_types"
import styles from "./Categoria.module.css"
import getChannels from "@/functions/getChanels"
import slugify from "@/functions/slugfy"
import Post_Card from "@/componets/post_card/Post_Card"

async function page({ params }: { params: { id: string } }) {
    const { id } = await params
    const data: PostProps[] = (await getChannels()) || []

    const posts = data.filter(({ category }) => {
        return slugify(`${category}`) === id
    })

    return (
        <main className={styles.category}>
            <h1 className="h1">{posts[0].category}</h1>
            <div className={styles.category__posts}>
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
        </main>
    )
}

export default page