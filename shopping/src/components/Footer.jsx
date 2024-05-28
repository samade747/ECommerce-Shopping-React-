import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`   
const Left = styled.div`
    flex: 1;
    padding: 20px;
    flex-direction: column;
    
`

const Logo = styled.h1`

`    

const Desc = styled.p`
    margin: 20px 0px;

`

const SocialContainer = styled.div`
    display: flex;  

`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #${props => props.color};

`
const Title = styled.h3`
    margin-bottom: 30px;
`   

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    
`   
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`



const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`  

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`
const PaymentContainer = styled.div`
    display: flex;
    align-items: center;
`
const PaymentIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const PaymentIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>usa shopping</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit
                lorem ipsum dolor sit amet consectetur adipisicing elit
                lorem ipsum dolor sit amet consectetur adipisicing elit
           </Desc>

            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook />                    
                </SocialIcon>

                <SocialIcon color="3B5999">
                    <Instagram />                    
                </SocialIcon>

                <SocialIcon color="3B5999">
                    <Twitter />                    
                </SocialIcon>
               
            </SocialContainer>


        </Left>

        <Center>
            <Title>Useful Links</Title>

            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>

            </List>





        </Center>



        <Right>
            <Title>
                Contact                
            </Title>

            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>


            <ContactItem>   
                <Phone style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>


            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/> 0k7pH@example.com
            </ContactItem>


        </Right>






    </Container>
  )
}

export default Footer