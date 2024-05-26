// import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
        <Info>
          <Title>
            {item.title}
          </Title>
          <Button>SHOP NOW</Button>
        </Info>

    </Container>
  )
}

export default CategoryItem