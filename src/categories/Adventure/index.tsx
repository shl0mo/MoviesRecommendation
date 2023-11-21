import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetAdventureMovies } from "../../services/movie.service";

export const Adventure = () => GetMovies(GetAdventureMovies, "Filmes de Aventura");
