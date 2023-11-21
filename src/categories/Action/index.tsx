import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetActionMovies } from "../../services/movie.service";

export const Action = () => GetMovies(GetActionMovies, "Filmes de Ação");
