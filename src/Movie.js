import React, { Component } from 'react';
//yarn add prop-types 
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// class Movie extends Component{
//     //props 에 원하는 데이터 타입 입력 부모 컴포넌트가 전달하는 데이터의 종류 및 유무를 체크할 수 있음
//     static propTypes = {
//         title: PropTypes.string,
//         poster: PropTypes.string
//     }


//     render(){
//         console.log(this.props)
//         return(
//             <div>
//                 {/* <MoviePoster poster={this.props.poster} /> */}
//                 <MoviePosterDumb poster={this.props.poster} />
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }


//smart component
// class MoviePoster extends Component{

//     static propTypes = {
//         //필수 요건인 데이터를 전달받았는지 확인
//         poster: PropTypes.string.isRequired
//     }
//     render(){
//         return(
//             <img src = {this.props.poster} width="300"/>
//         )
//     }
// }


function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index) => <MovieGenres genre={genre} key={index} />)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis=' ...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

function MovieGenres({genre}){
    return(
        <span className="Movie__Genre">{genre} </span>
    )
}

//dumb component
function MoviePoster({poster, alt}){
    return (
        <img src = {poster} title={alt} className="Movie__Poster" alt={alt}/>
    )
}

MovieGenres.propTypes ={
    genre : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie;
