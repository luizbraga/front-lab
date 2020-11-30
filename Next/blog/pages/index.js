import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({posts}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blog Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to this random Blog
        </h1>

        <div className={styles.grid}>
          {posts.map((post) => (
             <Link key={post.id} href={`/post/${post.id}`}>
               <div className={styles.card}>
                <h3>{post.title}</h3>
                <p>{post.created_at}</p>
               </div>
             </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

// SSG use getStaticProps instead
export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:8000/posts`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    }
  }
}
