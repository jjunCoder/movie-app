import React from "react";
import { string, number, arrayOf } from "prop-types";

function Movie({
    id,
    title,
    medium_cover_image,
    year,
    rating,
    genres,
    summary,
}) {
    // console.log(id);
    return (
        <div className="movie">
            <img src={medium_cover_image} alt={title} />
            <div className="movie__data">
                <h4 className="movie__title">{title}</h4>
                <p className="movie__year">{year}</p>
                <p className="movie__rating">{rating}</p>
                <ul className="genres">
                    {genres.map((genre, idx) => (
                        <li key={idx} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: number.isRequired,
    title: string.isRequired,
    medium_cover_image: string.isRequired,
    year: number.isRequired,
    rating: number.isRequired,
    genres: arrayOf(string).isRequired,
    summary: string.isRequired,
};

export default Movie;

/*

*/
