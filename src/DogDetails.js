import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";


const DogDetails = ({dogs}) => {
    const { name } = useParams();
    let dog = {}
    if (name) {
        dog = dogs.find(
            dog => dog.name.toLowerCase() === name.toLowerCase()
            
    )
    if(!dog) return <Redirect to="/dogs"/>
   
}
    return(
        
        <div>
            <div>
                <h1>Hi I am {dog.name}</h1>
                <img src={dog.src}/>
                <h4>{dog.name}</h4>
                <h5>Age:{dog.age}</h5>
                <ul>
                {dog.facts.map(fact => {
                   return <li>{fact}</li>
                })}
                </ul>
                <Link to="/dogs">Go Back</Link>
            </div>
        </div>

    )

}

export default DogDetails;