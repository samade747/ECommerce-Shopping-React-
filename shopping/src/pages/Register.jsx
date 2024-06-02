import { Title } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Wrapper = styled.div``







const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder="name"/>
              <Input placeholder="last name"/>
              <Input placeholder="username"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Agreement>
                  By creating an account, I consent to the processing of my personal
                  data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>
              <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register