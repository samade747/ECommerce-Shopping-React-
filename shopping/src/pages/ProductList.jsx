import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div`   

`

const Title = styled.h1`
  margin: 20px;
  
`

const FilterContainer = styled.div`

  display: flex;
  justify-content: space-between;

`

const Filter = styled.div`
  margin: 20px;

`

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
          <FilterContainer>
            <Filter>filter1</Filter>
            <Filter>filter2</Filter>

            <Products />
            <Newsletter />
            <Footer />







          </FilterContainer>
    </Container>
  )
}

export default ProductList