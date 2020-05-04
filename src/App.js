import React from "react";
import { string, number } from "prop-types";

function Blog({ name }) {
    return <h1>This is {name}'s Blog</h1>;
}

function Movie({ title, picture_url, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <h4>{rating} / 5.0</h4>
            <img src={picture_url} alt={title} />
        </div>
    );
}

Movie.propTypes = {
    title: string.isRequired,
    picture_url: string.isRequired,
    rating: number.isRequired,
};

const movieList = [
    {
        id: 1,
        title: "킹덤",
        picture_url:
            "https://image.news1.kr/system/photos/2020/2/24/4068147/article.jpg/dims/optimize",
        rating: 4.9,
    },
    {
        id: 2,
        title: "부부의세계",
        picture_url:
            "https://fs.jtbc.joins.com/joydata/CP00000001/prog/drama/theworldofthemarried/img/20200312_140557_036.jpg",
        rating: 4.9,
    },
];

function App() {
    return (
        <div className="App">
            <Blog name="jjuncoder" />
            {movieList.map((movie) => (
                <Movie
                    key={movie.id}
                    title={movie.title}
                    picture_url={movie.picture_url}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default App;
