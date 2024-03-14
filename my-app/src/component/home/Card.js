import React, {useEffect, useState} from "react";
import axios from "axios";

import "../style.css"
  
  const CardContainer = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3001/servies")
        .then((response) => {
          setApiData(response.data)
        })
        .catch((e) => {
          console.log(e.message)
        })
    },[])
    return(
    <div className="cards-container">
      {
        apiData.map((value) => (
        <div className="cards">
      <img src={ value.productUrl } 
        alt='Image'  />
      <div className="cards-content">
        <h2>{ value.productName }</h2>
        <p>{ value.info }</p>
      </div>
    </div>
        ))
      }
    </div>
    )
    };
  
  const Card =()=> {
    
      return(
        <div className="container">
          <h1 style={{ 'text-align': 'center' }}>
            React Cards Slider
          </h1>
          <CardContainer />
          
        </div>
      );
    }

  export default Card