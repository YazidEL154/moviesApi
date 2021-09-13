export interface Details {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: Genre,
    homepage: string
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string;
    popularity: number,
    poster_path: string,
    production_companies: CompagniesProd,
    production_countries: Production,
    release_date: string,
    revenue:number,
    runtime: number,
    spoken_languages:Spoken,
    status: string,
    tagline: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number
    }
    export interface Spoken{
            english_name: string,
            iso_639_1: string,
            name: string
            }
    export interface Production 
    {
        iso_3166_1: string,
        name: string
        }
    export interface CompagniesProd
    {
        id: number,
        logo_path: null,
        name: string,
        origin_country: string;
        }
    export interface Genre
    {
        id: number,
        name: string
        }

