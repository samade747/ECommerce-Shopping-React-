import React from 'react'
import styled from 'styled-components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: coral;
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "right" && "left"};
    right: ${props => props.direction === "left" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`   

const Slider = () => {
  return (
    <Container>


        <Arrow direction="left">
            <KeyboardArrowLeftIcon />              
        </Arrow>

        <Arrow direction="right">
            <KeyboardArrowRightIcon />              
        </Arrow> 


    </Container>
  )
}

export default Slider