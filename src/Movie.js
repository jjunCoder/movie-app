import React from "react";
import { string, number } from "prop-types";

function Movie({ id, title, medium_cover_image, year, rating }) {
    return (
        <div>
            <h4>{title}</h4>
            <img src={medium_cover_image} alt={title} />
            <p>{year}</p>
            <p>{rating}</p>
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
