import axiosClient from "./AxiosConfig/axiosClient";

const movieApi = {
    getListNowPlaying: (page) => {
        const pageIndex = page ? page : 1
        const url = '/movie/now_playing?api_key=86e58b7a33d85afc40dd9fcf54c7b658&language=en-US&&page=' + pageIndex;
        return axiosClient.get(url);
    },
    searchMovie: (query, page) => {
        const pageIndex = page ? page : 1
        const url = '/search/movie?api_key=86e58b7a33d85afc40dd9fcf54c7b658&language=en-US&page=1&include_adult=false&query='+query+'&page='+pageIndex;
        return axiosClient.get(url);
    },
    detailMovie: (id) => {
        const url = '/movie/'+id+'?api_key=86e58b7a33d85afc40dd9fcf54c7b658&language=en-US';
        return axiosClient.get(url);
    },
}

export default movieApi;