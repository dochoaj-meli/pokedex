import Axios from 'axios'

const API_URL = 'https://pokeapi.co/api/v2'

export default {
  fetchPokemon: async (name) => {
    const url = `${API_URL}/pokemon/${name.toLowerCase()}`
    console.log(url)

    const pokemon = await (await Axios.get(url)).data
    return pokemon
  }
}