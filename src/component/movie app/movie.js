import React, { useState , useEffect } from "react";
import './movie.css'
import MovieCard from "./moviescard";
import Data from './data.json'
// import { useState ,useEffect } from "react";

const url="http://localhost:8300/movie";

function Movie() {

    const [movie,setMovie]=useState([]);

    useEffect(() => {
        fetch(url,{method:'GET'})
        .then(res=> res.json())
        .then((data)=>{
            // setNews(data.articles)
            setMovie(data)
            console.log(data)
        })
    }, [])
    


    return (
        <>
            <MovieCard newData={movie} />
        </>
    )
}

export default Movie;