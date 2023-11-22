import { instance } from "../utils/http";

export interface TheMovieDB {
  page: number;
  results: Movie[];
}

export interface Movie {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const apiKey = import.meta.env.VITE_API_KEY;

export async function GetPopularMovies(): Promise<TheMovieDB> {
  const endpoint = 'movie/popular'
  const result = await instance.http.get(
    `${endpoint}?api_key=${apiKey}`
  );
  return result.data;
}

export async function GetTopRatedMovies(): Promise<TheMovieDB> {
	const endpoint = 'movie/top_rated'
	const result = await instance.http.get(
		`${endpoint}?api_key=${apiKey}`
	);
	return result.data;
}

async function GetMoviesByGenre(genreId: number): Promise<TheMovieDB> {
	const endpoint = 'discover/movie';
	const result = await instance.http.get(
		`${endpoint}?with_genres=${genreId}&api_key=${apiKey}`
	);
	return result.data;
}

export const GetComedyMovies = (): Promise<TheMovieDB> => GetMoviesByGenre(35);

export const GetActionMovies = (): Promise<TheMovieDB> => GetMoviesByGenre(28);

export const GetAdventureMovies = (): Promise<TheMovieDB> => GetMoviesByGenre(12);

export const GetRomanceMovies = (): Promise<TheMovieDB> => GetMoviesByGenre(10749);

export async function GetRecommendations (movieId: number): Promise<TheMovieDB> {
	const endpoint = `movie/${movieId}/recommendations`;
	const result = await instance.http.get(
		`${endpoint}?api_key=${apiKey}`
	);
	return result.data;
}
