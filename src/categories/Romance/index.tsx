import { useEffect, useState } from "react";

import { GetMovies } from "../GetMovies";
import { GetRomanceMovies } from "../../services/movie.service";

export const Romance = () => GetMovies(GetRomanceMovies, "Filmes de Romance");
