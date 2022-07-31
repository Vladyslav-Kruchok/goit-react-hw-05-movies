import axios from 'axios';
const KEY = 'api_key=a00dfce4382f6d105ad489a1b9020455';
const MOVIE_URL = 'https://api.themoviedb.org/3/';

export const tmdbMovieAPI = (method, page, search = '') => {
    const pageNumb = `page=${page}`;
    const searchFilm = `query=${search}`
    const movieBaseURL = `${MOVIE_URL}${method}?${KEY}&${pageNumb}`;
    
    switch (method) {
        case 'search/movie':
            axios.defaults.baseURL = `${movieBaseURL}&${searchFilm}`;
            break;
        case 'trending/all/day':
            axios.defaults.baseURL = `${movieBaseURL}`;
            break;
        default:
            break;
    }

    return axios
        .get('')
        .then(responce => {
            const movData = responce.data.results;
            const totalPagesData = responce.data.total_pages;
            return {movData, totalPagesData};
        })
        .catch(err => {return err});
};

export const tmdbMovieIdAPI = (method, id, addMethod = '') => { 
    const fullMethod = (addMethod) ? `${method}/${id}/${addMethod}` : `${method}/${id}`;
    const movieBaseURL = `${MOVIE_URL}${fullMethod}?${KEY}`;
    axios.defaults.baseURL = `${movieBaseURL}`;

    return axios
        .get('')
        .then(responce => { return responce; })
        .catch(err => console.log(err));
};


export const tmdbImageAPI = (idImgFileWithExt, widthPx = 'original') => { 
    axios.defaults.baseURL = `https://image.tmdb.org/t/p/${widthPx}${idImgFileWithExt}`;

    return axios
        .get('')
        .then(reponce => { return reponce.config.baseURL; })
        .catch(err => console.log(err));
};