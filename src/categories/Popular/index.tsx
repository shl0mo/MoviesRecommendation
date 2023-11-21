import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetPopularMovies } from "../../services/movie.service";

export const Popular = () => GetMovies(GetPopularMovies, "Filmes Populares");
