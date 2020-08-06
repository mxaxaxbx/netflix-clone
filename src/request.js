const API_KEY = "93113bc0b939a398eee2c0931e6b7e03";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=es-CO`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=es-CO`,
    fetchTopRelated: `/movie/top_rated?api_key=${API_KEY}&language=es-CO`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;