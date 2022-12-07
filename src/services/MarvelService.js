class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Coud not fetch ${url}, status ${res.status}`)
    }
    return await res.json()
  }
  getAllCharacters = () => {
    return this.getResource(
      'https://gateway.marvel.com:443/v1/public/characters?apikey=d6d8b878a548fca9201e2f928e9c7870'
    )
  }
}
export default MarvelService
