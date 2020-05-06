import React from "react";
import { string, number } from "prop-types";

function Movie({ id, title, medium_cover_image, year, rating }) {
    return (
        <div class="movie">
            <img src={medium_cover_image} alt={title} />
            <div class="movie__data">
                <h4 class="movie__title">{title}</h4>
                <p class="movie__year">{year}</p>
                <p class="movie__rating">{rating}</p>
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
};

export default Movie;
