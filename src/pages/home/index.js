import { useEffect } from "react";
import NavBar from "../../components/NavBar"
import { useDispatch,useSelector } from 'react-redux';
import {getMovies} from '../../api/movies';

const Home=()=>{

    const dispatch= useDispatch();

    const {movies}= useSelector(state=>state.movies);
    
    console.log(movies);
    useEffect(()=>{
        dispatch(getMovies());
    },[dispatch]);

    return(
        <>
            <NavBar></NavBar>
        </>
    )
}

export default Home;