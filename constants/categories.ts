import { Movie } from "../typings";

// const categories = [
// 	"netflixOriginals",
// 	"actionMovies",
// 	"commedyMovies",
// 	"documentaries",
// 	"horrorMovies",
// 	"topRated",
// 	"trendingNow",
// ];
export interface Props {
	netflixOriginals: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	documentaries: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	topRated: Movie[];
	trendingNow: Movie[];
}
