import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../../styles/Home.module.css'
import PokeApi from '../../../services/pokemon'

export async function getServerSideProps(ctx) {
  return {
    props: {
      pokemon: await PokeApi.fetchPokemon(ctx.query.name || 'Pikachu')
    }
  }
}

export default function Pokemon({ pokemon }) {
  const trackClick = () => {
    window.gtag('event', 'VIP/ACTION', {
      value: pokemon.name
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {pokemon.name}
        </h1>

        <div className={styles.grid}>
          <img src={pokemon.sprites.front_default} />
        </div>

        <div className={styles.grid}>
          <button type='button' onClick={(e) => trackClick()}>Capturar</button>
        </div>
      </main>
    </div>
  )
}
