import React from 'react';
import styled from 'styled-components';

const Card = ({title, description, image, imageSize = "100px",
              leftMargin = "37px", topMargin = "30px"}) => {
  return (
    <StyledWrapper>
      <div className="card">
        
        
        <div className="card2">
          <h1> {title} </h1>
          <img src={image} alt="" style={{ width: imageSize, marginLeft: leftMargin, marginTop: topMargin }}/>
          <p> {description}</p> 
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 254px;
    height: 254px;
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 20px;
    transition: all .3s;
    position: relative;
  }

  h1 {
    font-size: 24px;  /* Set the font size */
    font-family: "Inter", sans-serif;  /* Change the font family */
    color: #fff;  /* White text color */
    margin: 0;  /* Remove default margin */
    padding: 5px;  /* Add padding around the text */
    text-align: center;  /* Center align the text */
    font-weight: bold;  /* Make the text bold */
  }
  
  p {
    font-family: "Inter", sans-serif;  /* Change the font family */
    padding: 5px;
    position: absolute;
    bottom: 10px;
  }

  img {
    position: absolute;
    top: 10px;
    left: 15px;
  }

  .card2 {
    width: 254px;
    height: 254px;
    background-color: #1a1a1a;
    border-radius: 10px;
    transition: all .2s;
  }

  .card2:hover {
    transform: scale(0.95);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }`;

export default Card;
