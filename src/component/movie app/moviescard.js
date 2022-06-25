import React from "react";
import Data from './data.json';
import { Link } from "react-router-dom";

const MovieCard=(props)=>{


    const renderMovie=({newData})=>{
        if(newData){
            return newData.map((items)=>{
                return(
                    <>
                    {/* <p>{items.title}</p> */}
                    <Link to={`/details/${items.id}`}>
                    <div className="items">
                        <div className="img-box">
                            <img src={items.image} alt={items.title} />
                        </div>
                        <div className="text-box">
                            <h2>{items.title}</h2>
                            <p>{items.year}</p>
                            <p>{items.imDbRating}</p>
                        </div>
                    </div>
                    </Link>
                    </>
                )
            })
        }
    }


    return(
        <>
          <div className="container1">

            {/* {
                Data.map(data=>{
                    return(     
                // <Link to={'/'}>
                <div className="items" key={data.id}>
                    <div className="text-box">
                        <h2>{data.original_title}</h2>
                        <p>{data.release_date}</p>
                        <p>Rating: {data.vote_average}</p>
                    
                    </div>
                </div>
                // </Link>
                    )
                })
            } */}
            {renderMovie(props)}

            </div>
        </>
    )
}

export default MovieCard;