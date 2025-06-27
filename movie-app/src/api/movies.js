import axios from 'axios';
import { setMovies } from '../slice/movieSlice';


export const getMovies = () => async dispatch =>{
    const url= 'https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON';
    try{
        const{data}= await axios.get(url);
        dispatch(setMovies(data));
        return data;
    }
    catch(error){
        return error;
    }
};

