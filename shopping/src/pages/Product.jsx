// import { Announcement } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
// import { Filter } from '@mui/icons-material'



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
  margin: 20px 0px;


`


const Price = styled.span`
  font-weight: 100;
  font-size: 40px;


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

`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option`

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
                <Desc> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, nihil quaerat! Voluptatum nam perferendis vero quos optio laborum, veritatis facere deleniti molestias iste obcaecati, at voluptatibus enim ea maiores ratione.
                Maxime, ex nemo perferendis omnis quas asperiores, maiores quo iure hic consectetur soluta explicabo laboriosam. Sit distinctio consequuntur dolorum nulla culpa amet labore odio architecto tenetur consectetur libero, ipsa vitae.
                Neque praesentium blanditiis id ex cumque, suscipit officiis repellat dicta, nemo, obcaecati impedit placeat facilis? Explicabo ut debitis vero, dolorum, consequuntur hic iusto recusandae repudiandae nesciunt modi, aspernatur illo beatae.
                Qui aperiam corrupti aut laboriosam minus similique deleniti dolore eveniet debitis sed, asperiores commodi nemo. Fugiat cum harum quod, expedita velit magnam ea minus consequatur, ipsam nostrum, fuga esse tempore!
                Doloremque vitae doloribus inventore, 
                </p> </Desc>       
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
                  <AddContainer>
                      <AmountContainer>
                          <Remove />
                          <Amount>1</Amount>
                          <Add />
                     </AmountContainer>
                  </AddContainer>
                </FilterContainer>        
            </InfoContainer>       
          </Wrapper>
        <Newsletter />
        <Footer />

    </Container>
  )
}

export default Product