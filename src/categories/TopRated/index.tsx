import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetTopRatedMovies } from "../../services/movie.service";

export const TopRated = () => GetMovies(GetTopRatedMovies, "Filmes Mais Curtidos");
