import React, {useState, useEffect} from 'react';
import '../../style/Header.scss'
import genresArr from '../../Api/GenreMovie.json'




const CategoryBar = (props) => {

    return (
        <>
            <div className={'heading'}>
                <h1>Movies</h1>
                <ul className={'sub-heading'}>
                    {genresArr.map(genre => {
                            return (
                                <li key={genre.id}><a onClick={() => props.changeGenres(genre.id)} >{genre.name}</a></li>
                            )
                        }
                    )
                    }
                </ul>
            </div>
        </>
    );
};

export default CategoryBar;