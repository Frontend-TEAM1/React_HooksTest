import styled from "styled-components";

function ProductCard({ detail, onNavigate }) {
  const handleClick = () => {
    onNavigate(detail.productNumber);
  };
  console.log("=====>" + detail.productNumber);
  return (
    <S.Item onClick={handleClick}>
      {/*<S.Item onClick={handleClick}>*/}
      <h4>{detail.productName}</h4>
      <p>상품번호: {detail.productNumber}</p>
      <p>가격: {Number(detail.productPrice).toLocaleString()}원</p>
      {/*toLocalString()으로 되는 방법 찾아보기*/}
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
