import React from 'react';

const FilmRelease = ({name, url}) => {
    return(
        <div className="FilmRelease">
            <h2><li><a href={url}>{name}</a></li></h2>
        </div>
    )
    
}

export default FilmRelease;