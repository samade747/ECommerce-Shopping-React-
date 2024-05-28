import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    display: flex;
    flex-direction: column;
    
`   
const Left = styled.div`
    flex: 1;
    padding: 20px;
    
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
        <Left></Left>



        <Center></Center>



        <Right></Right>






    </Container>
  )
}

export default Footer