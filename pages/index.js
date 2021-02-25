import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ¡Pokedex!
        </h1>

        <div className={styles.grid}>
          <h2>Busca un Pokémon</h2>
          <form action='/pokemon/search' method='GET'>
            <input type='text' name='name' />
            &nbsp;
            <button type='submit'>¡Buscar!</button>
          </form>
        </div>
      </main>
    </div>
  )
}
