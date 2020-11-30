import React from 'react';
import FilmRelease from './FilmRelease';

const FilmReleaseList = ({films}) => {
    const filmItems = films.map(
        film => {
            return(
                <FilmRelease key={film.id} name={film.name} url={film.url}></FilmRelease>
            )
        }
    )
    return(
        <div className="FilmReleaseList">
            {filmItems}
        </div>
    )
    
}

export default FilmReleaseList;