import React from 'react';
import styled from 'styled-components';
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import { mobile } from '../responsive.jsx';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  background-color: #${(props) => props.bg};

  color: #${(props) => props.color};

  ${mobile({ flexDirection: 'column' })}
  
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #${(props) => props.bg};
  color: #${(props) => props.color};

  ${mobile({ flexDirection: 'column' })}
`;

const FooterContainer = styled.div`
  display: flex;
  background-color: #fcf5f5;
  color: #${(props) => props.color};

  ${mobile({ flexDirection: 'column' })}
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  justify-content: center;

  ${mobile({ flexDirection: 'column' })}

`;

const Logo = styled.h1`

  margin-bottom: 10px;

  ${mobile({ marginBottom: '5px' })}

`;

const Desc = styled.p`
  margin: 20px 0px;

  ${mobile({ textAlign: 'center' })}

`;

const SocialContainer = styled.div`
  display: flex;

  ${mobile({ justifyContent: 'center' })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #${(props) => props.color};
  margin-right: 10px;

  ${mobile({ marginRight: '5px' })}

`;

const Title = styled.h3`
  margin-bottom: 30px;

  ${mobile({ textAlign: 'center' })}

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  ${mobile({ justifyContent: 'center' })}
  
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;


  ${mobile({ textAlign: 'center' })}

`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

    ${mobile({ display: 'none' })}

`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

    ${mobile({ backgroundColor: '#${(props) => props.bg}' })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

    ${mobile({ textAlign: 'center' })}
`;

const PaymentContainer = styled.div`
  display: flex;
  align-items: center;

    ${mobile({ textAlign: 'center' })}
`;

const PaymentIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;

    ${mobile({ textAlign: 'center' })}
`;

const Footer = () => {
  return (
    <PageWrapper>
      
        
      <FooterContainer>
        <Left>
          <Logo>usa shopping</Logo>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur
            adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
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
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <Room style={{ marginRight: '10px' }} /> 622 Dixie Path, South Tobinchester 98336
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: '10px' }} /> +1 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: '10px' }} /> 0k7pH@example.com
          </ContactItem>
          <PaymentContainer>
            <PaymentIcon color="3B5999">
              <Facebook />
            </PaymentIcon>
            <PaymentIcon color="E4405F">
              <Instagram />
            </PaymentIcon>
            <PaymentIcon color="55ACEE">
              <Twitter />
            </PaymentIcon>
            <PaymentIcon color="E60023">
              <Pinterest />
            </PaymentIcon>
          </PaymentContainer>
        </Right>
      </FooterContainer>
    </PageWrapper>
  );
};

export default Footer;
