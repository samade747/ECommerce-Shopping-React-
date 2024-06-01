// import { Announcement } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Title } from '@mui/icons-material'


const Container = styled.div`


`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;


`

const ImgContainer = styled.div`
  flex: 1;
  
`


const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`


const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;  



`


const Title = styled.h1`



`


const Desc = styled.p`



`


const Price = styled.span`



`



const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
          <Wrapper>
            <ImgContainer>              
              <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>

            <InfoContainer>
                <Title>Denim Jumpsuit</Title>              
                <Desc>Denim Jumpsuit </Desc>       
                <Price>$ 20</Price>        
            </InfoContainer>

            




          </Wrapper>
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Product