import React from 'react'
import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';

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
            <Input placeholder="Search" />
            <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>


        </Left>

        <Center>Center</Center>

        <Right>right</Right>

        



      </Wrapper>
    </Container>
  )
}

export default Navbar  