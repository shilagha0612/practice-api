import React from 'react'
import { useParams } from 'react-router-dom';

const StyleWordPage  = ({ match }) => {
    const { color1, color2 } = useParams();
    const styles = {
      color: color1,
      backgroundColor: color2
    };
  
    return <h1 style={styles}>The word is: Styled Word</h1>;
  };

export default StyleWordPage
