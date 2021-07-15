import React from "react";
import { Link } from "react-router-dom";
const DogList = ({dogs}) => {
    
 return (
     <div>
         <h1> Take me home and I will love you forever</h1>
        <div>
         {dogs.map(dog => (
            <div key={dog.name}>
                <h3>
             <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
             </h3>
             <img src={dog.src}/>
             </div>
             
         ))}
        </div>
     </div>
 )
}

export default DogList;