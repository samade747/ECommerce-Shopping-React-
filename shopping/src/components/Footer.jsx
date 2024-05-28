import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    
`   
const Left = styled.div`
    flex: 1;
    padding: 20px;
    flex-direction: column;
    
`

const Logo = styled.h1`

`    

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`

`

const SocialIcon = styled.div`

`




const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`  


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>usa shopping</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>

            <SocialContainer>
                <SocialIcon>
                    <FacebookIcon />                    
                </SocialIcon>

                <SocialIcon>
                    <Instagram />                    
                </SocialIcon>

                <SocialIcon>
                    <Twitter />                    
                </SocialIcon>
               
            </SocialContainer>


        </Left>

        <Center>


        </Center>



        <Right>


        </Right>






    </Container>
  )
}

export default Footer