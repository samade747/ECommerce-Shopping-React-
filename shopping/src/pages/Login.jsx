import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  d

`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;

` 
const Title = styled.h1`  
  font-size: 24px;
  font-weight: 300;

`


const Form = styled.form`
  display: flex;  
  flex-direction: column;

`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
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