import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;  
  background-color: black;
  color: white;
  
    
`
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between; 
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

`



const Left = styled.div`
  flex: 1;

`
const Center = styled.div`
flex: 1;
`

const Right = styled.div`
flex: 1;
`




const Navbar = ()=>{
  return (
    <Container>
      <Wrapper>

        <Left>
        <Language>EN</Language>
          <SearchContainer>
            <input 
            type
            icon
            />
          </SearchContainer>


        </Left>

        <Center>Center</Center>

        <Right>right</Right>

        



      </Wrapper>
    </Container>
  )
}

export default Navbar  