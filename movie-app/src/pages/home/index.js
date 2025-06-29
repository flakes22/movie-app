import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../api/movies";
import MovieCard from "../../components/MovieCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1, marginTop:2}}>

        <Grid container spacing={2}>
        {movies?.length > 0 &&
          movies.map((movie, index) => (
            <MovieCard
              key={movie.id || `${movie.title}-${index}`} // Prefer movie.id, fallback to composite key
              movie={movie}
            />
          ))}
          </Grid>
      </Box>
    </>
  );
};

export default Home;
