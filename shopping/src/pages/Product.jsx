
import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@mui/icons-material'
import { mobile } from '../responsive'




const Container = styled.div`


`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}

`

const ImgContainer = styled.div`
  flex: 1;

  ${mobile({ marginBottom: '20px' })}
  
`


const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

  ${mobile({ height: '40vh' })}
`


const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;  


  ${mobile({ padding: '10px' })}
`


const Title = styled.h1`

${mobile({ fontSize: '24px' })}

`


const Desc = styled.p`
  margin: 20px 0px;


  ${mobile({ textAlign: 'center' })}
`


const Price = styled.span`
  font-weight: 100;
  font-size: 40px;

  ${mobile({ marginBottom: '20px' })}
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;

  
`

const Filter = styled.div`
  display: flex;

  
`

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;

  ${mobile({ fontSize: '10px' })}
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;

  ${mobile({ width: '15px', height: '15px' })}
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;

  ${mobile({ margin: '5px' })}
`

const FilterSizeOption = styled.option`

${mobile({ fontSize: '10px' })}
`

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;

  ${mobile({ width: '100%' })}
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  ${mobile({ flexDirection: 'column' })}
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  ${mobile({ margin: '5px 0px' })}
`

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
    background-color: #f8f4f4;
  }

  ${mobile({ width: '100%' })}
`




const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
            at iaculis arcu nisi sed mi. Donec vitae ipsum eget sapien
            pellentesque interdum.{' '}
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>

      )
}

export default Product