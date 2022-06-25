import React, { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './details.css';
import ActorList from "./actor";


const url="http://localhost:8200/details"


function Details(){
    
    let [details,setDetails]=useState([]);
    let [actor,setActor]=useState([])

    let params=useParams();
    console.log(params.id)
    
    useEffect(()=>{
        fetch(`${url}/${params.id}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            setDetails(data);
            console.log(data.actors)
            setActor(data.actors)
        })

    },[])



    return(
        <>
        {/* <h2>details page</h2>
        <h2>{details.title}</h2> */}
        <div className="details-container">
        <div className="details-img">
            <img src={details.image} alt="" />
        </div>
        <div className="movie-name">
            <h2>{details.title}</h2>
        </div>
        <div className="movies-description">
         
            <p>Year : {details.year}</p>
            <h4>Ratings:{details.imDbRating}</h4>
        </div>
        <div className="movie-cast">
            <h2>Top cast</h2>
            <div className="cast-box">
                <ActorList newData={actor} />
            </div>
        </div>
        <div className="movie-director">
            <h3>Crew : {details.crew}</h3>
        </div>
    </div>
        </>
    )
}

export default Details;