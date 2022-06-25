import React from "react";

const ActorList=(props)=>{
    const renderActor=({newData})=>{
        if(newData){
            return newData.map((item)=>{
                return(
                    <>
                    <div className="cast-info">
                    <img src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <p>{item.asCharacter}</p>
                </div>
                    </>
                )
            })
        }
    }
    return(
        <>
        {/* <h3>Actor list</h3> */}
        {renderActor(props)}
        </>
    )
}

export default ActorList;