import React from 'react'
import styled from 'styled-components'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
 import { useState } from 'react';
import { SliderItems } from '../data';


const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background-color: coral;   
`

const Wrapper = styled.div`  
    height: 100%;
    display: flex; 
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`


const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    transition: all 1.5s ease;
    align-items: center;
    background-color: ${props => props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`
const InfoContainer = styled.div`
    padding: 50px;
    flex: 1;
`
const Image = styled.img`
    height: 100%;    
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
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
     const [slideIndex, setSlideIndex] = useState(0);
     const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 1 ? slideIndex + 1 : 0);
        }
    };
  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon />              
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {SliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>           
                        <Image src={item.img} />            
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>   
                        <Desc>{item.desc}</Desc>   
                        <Button>ADD TO CART</Button>
                    </InfoContainer>
                    </Slide>
            ))}
        <Slide bg="#f5fbfd">
            <ImgContainer>           
                <Image src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />            
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>   
                <Desc>High quality product</Desc>   
                <Button>ADD TO CART</Button>
            </InfoContainer>
            </Slide>          
        </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <KeyboardArrowRightIcon />              
        </Arrow> 
    </Container>
  )
}

export default Slider;