import Head from 'next/head'
import styles from '../../styles/Home.module.css'

function Post({post}) {
  if (post === undefined) {
    return <></>
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
            {post.title}
        </h1>

        <p className={styles.description}>
          {post.content}
        </p>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:8000/posts`)
    const posts = await res.json()

    const paths = posts.map((post) => ({
      params: { id: post.id.toString() },
    }))

    return {
      paths,
      fallback: true
    };
  }

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`http://localhost:8000/posts/${params.id}`)
    const post = await res.json()

    // Pass post data to the page via props
    return { props: { post } }
}

export default Post
