import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

const movieImages = [
  "https://boygeniusreport.files.wordpress.com/2016/11/puppy-dog.jpg?quality=98&strip=all&w=782",
  "https://www.rachaelrayshow.com/sites/default/files/styles/video_1920x1080/public/images/2019-06/dog.jpg?itok=mFEHYdZh",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnbXKYMIB9OAIiBFslpb2gzxvGae-CBPja60KA_hSCQwjTEXw0g",
  "https://vetstreet.brightspotcdn.com/dims4/default/54186d0/2147483647/thumbnail/590x420/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F40%2F58%2F3bc5c01c4cdb8a0581681831faa9%2Fgreat-dane-shaking-paw-thinkstockphotos-522650067-590.jpg"
]


class App extends Component{

  //Render : componentWillMount() -> render() -> componentDidMount()

  //Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
  componentWillMount(){
    console.log('will mount')
  }

  componentDidMount(){
    this._getMovies();
  }

  state ={

  }

  _callApi = () => {
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies )
    .catch(err => console.log(err))
  }

  _getMovies = async () => {
    // callApi()의 작업이 실행될 때까지 대기. 성공적인 수행이 아님 callApi의 return value가 무엇이든 movies에 set함
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _renderMovies = () => {
    const movies =  this.state.movies.map(movie => {
      console.log(movie)
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres} 
        synopsis = {movie.synopsis}
      />
    })
    return movies 
  }

  render(){
    const movies = this.state;
    return(
      <div className={movies ? 'App' : 'App-loading'}>
        {this.state.movies ? this._renderMovies() : 'loading'}
      </div>
    )
  }
}

export default App;
