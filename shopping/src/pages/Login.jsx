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

  ${mobile({ flexDirection: 'column' })}

` 

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;  

  ${mobile({ width: '80%' })}

`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

  ${Button} {
    width: 40%;
  }

` 
const Title = styled.h1`  
  font-size: 24px;
  font-weight: 300;

  ${mobile({ fontSize: '20px' })}

`


const Form = styled.form`
  display: flex;  
  flex-direction: column;

  ${mobile({ width: '80%' })}

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

  ${mobile({ width: '80%' })}

`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

  ${mobile({ fontSize: '10px' })}
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
              <Input placeholder="username"/>
              <Input placeholder="password"/>            
              <Button>LOGIN</Button>
              <Link>FORGOT PASSWORD?</Link>
              <Link>CREATE AN ACCOUNT</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login