import styled from 'styled-components';

function ProductCard({ onNavigate, detail, priceShow }) {
  return (
    <S.Item onClick={() => onNavigate(detail.productNumber)}>
      <h4>{detail.productName}</h4>
      <p>상품번호: {detail.productNumber}</p>
      <p>가격: {priceShow(detail.productPrice)}</p>
      <p>사이즈: {detail.productSize}</p>
      <p>평점: {detail.productRating}</p>
      <p>리뷰: {detail.productReview}</p>
    </S.Item>
  );
}
export default ProductCard;

const Item = styled.li`
  border: 1px solid #000;
  cursor: pointer;
  width: 300px;
  margin: 16px auto;
`;

const S = {
  Item,
};
