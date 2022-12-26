import React, {useState, useEffect} from 'react';
import '../../style/Header.scss'
import genresArr from '../../Api/GenreMovie.json'


const CategoryBar = (props) => {

    return (
        <>
            <div className={'heading'}>
                <h1>Movies</h1>
                <div className={'sub-heading'}>
                    {genresArr.map(genre => {
                            return (
                                <button key={genre.id} onClick={() => props.changeGenres(genre.id)}>
                                    {genre.name}
                                </button>
                            )
                        }
                    )
                    }
                </div>
            </div>
        </>
    );
};

export default CategoryBar;