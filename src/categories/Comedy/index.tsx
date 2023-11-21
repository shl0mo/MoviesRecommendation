import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetComedyMovies } from "../../services/movie.service";

export const Comedy = () => GetMovies(GetComedyMovies, "Filmes de Comédia");
