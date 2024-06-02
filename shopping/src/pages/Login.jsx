import React from 'react'
import styled from 'styled-components'

const Container = styled.div``



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