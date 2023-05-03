import axios from "axios";

// api base url
const BASE_URL =  'https://api.themoviedb.org/3';

// import token from env file
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const FetchDataFromApi = async (url, params)=> {
    try {
        const {data} = await axios.get(
            BASE_URL + url , {
                headers,
                params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}