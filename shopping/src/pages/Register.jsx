import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center; 

  

  ${mobile({ backgroundImage: 'url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")'})}

`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;



  ${mobile({ width: '75%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;

  ${mobile({ fontSize: '20px' })}
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  

  ${mobile({ flexDirection: 'column' })}
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;

  ${mobile({ marginBottom: '5px' })}
`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
  
  ${mobile({ fontSize: '10px' })}

`
const Button = styled.button`
  width: 60%;
  border-radius: 10px;
  font-size: 15px;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  

  
  ${mobile({ width: '75%', fontSize: '10px' })}

`

const Agreeament = styled.div`
  font-size: 12px;
  margin: 20px 0px;

  ${mobile({ fontSize: '10px' })}
  
` 
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  ${mobile({ fontSize: '10px' })}
`






const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder="Name"/>
              <Input placeholder="Last name"/>
              <Input placeholder="username"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Agreeament>
                
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
                
              </Agreeament>
              <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register