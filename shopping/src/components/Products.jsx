import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  padding: 10px;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
