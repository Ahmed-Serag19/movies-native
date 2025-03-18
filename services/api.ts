export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchPopularMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }
  const data = await response.json();
  return data.results;
};
// EXPO_PUBLIC_MOVIE_API_KEY=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjc4YTgxOTI3NmU3ZTU5Y2JiYzUwODI0MDVmODhiYiIsIm5iZiI6MTYzMzY4MjUzOC4zMTYsInN1YiI6IjYxNjAwNDZhMzhlNTEwMDAyOTNmOTFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YYRNtwPHmeCk22lXGOlcGD9ebkVruW4sJpjDimAGNuM
