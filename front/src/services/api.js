const API_KEY = "d9991a446e11890d0333b3a815879683"
const BASE_URL = "https://dummyjson.com"

export const getMovies = async () => {
        const response = await fetch(`${BASE_URL}/products?limit=0`);
        const data = await response.json()
        return data.products
}

export const searchMovies = async(query) => {
        const response = await fetch(`${BASE_URL}/products/search?q=${query}`)
        const data = await response.json()
        console.log(data)
        return data.products

}