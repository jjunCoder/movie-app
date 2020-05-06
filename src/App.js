import React from "react";
import Movie from "./Movie";
import axios from "axios";

class App extends React.Component {
    state = {
        isLoading: true,
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
        this.setState({ movies, isLoading: false });
    };

    componentDidMount() {
        this.getMovie();
    }

    render() {
        const { isLoading, movies } = this.state;

        return (
            <section class="container">
                <h1>Movie-app</h1>
                {isLoading ? (
                    <div class="loader">
                        <span class="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div class="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                title={movie.title}
                                medium_cover_image={movie.medium_cover_image}
                                year={movie.year}
                                rating={movie.rating}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default App;
