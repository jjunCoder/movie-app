import React from "react";
import Movie from "./Movie";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoaded: false,
        movies: [],
    };

    getMovie = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
        );
        this.setState({ movies, isLoaded: true });
    };

    render() {
        this.getMovie();
        const { isLoaded, movies } = this.state;

        return (
            <div>
                <h1>Movie-app</h1>
                {!isLoaded ? (
                    <p>Loading...</p>
                ) : (
                    movies.map(
                        ({ id, title, medium_cover_image, year, rating }) => (
                            <Movie
                                key={id}
                                id={id}
                                title={title}
                                medium_cover_image={medium_cover_image}
                                year={year}
                                rating={rating}
                            />
                        )
                    )
                )}
            </div>
        );
    }
}

export default App;
