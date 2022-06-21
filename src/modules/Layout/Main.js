import { Component } from 'react';
import { Movies } from '../Components/Movies';
import { Preloader } from '../Components/Preloader';
import { Search } from '../Components/Search';

// const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=2fbea1d9&s=Avengers`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=2fbea1d9&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <div className='Main container'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </div>
    );
  }
}

export { Main };
