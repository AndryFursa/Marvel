class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  _apiKey = 'apikey=d6d8b878a548fca9201e2f928e9c7870'
  getResource = async (url) => {
    let res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Coud not fetch ${url}, status ${res.status}`)
    }
    return await res.json()
  }
  getAllCharacters = () => {
    return this.getResource(
      `${this._apiBase}characters?limit=9&${this._apiKey}`
    )
  }
  getCharacter = (id) => {
    return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`)
  }
}
export default MarvelService
