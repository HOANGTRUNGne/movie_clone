import React, {useState, useEffect} from 'react';
import axios from "axios";

const GrenreItem = () =>{
    return(
        <li></li>
    )
}
const CategoryBar = () => {
    const [genres, setGenres] = useState([])
    const genresApi = 'https://api.themoviedb.org/3/genre/movie/list'
    const GenresCall = async () => {
        const data = await axios.get(genresApi, {
            params: {
                api_key: 'e06dfd90d926d62130148f7ba938baa8'
            }
        })
        const results = data.data.genres
        setGenres(results)
    }
    useEffect(() => {
        GenresCall()
    }, [])

    console.log(genres)

    return (
        <>

            {genres.map(genre => {
                return (
                    <ul className={'sub-heading'}><GrenreItem /></ul>
                )
            })}
        </>
    );
};

export default CategoryBar;