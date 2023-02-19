import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import productList from "../__mock__/products.json";

function DetailPage() {
  const params = useParams();
  const { productNumber } = params;
  // console.log(params.productNumber);

  const [product, setProduct] = useState({});
  // const [comment, setComment] = useState();

  useEffect(() => {
    const filteredProduct = productList.products.find(
      (product) => product.productNumber === productNumber
    );
    console.log("= : ) " + productList);
    setProduct(filteredProduct);
  }, [productNumber]);

  return (
    <S.Wrapper>
      <h1>상세페이지</h1>
      <h2 style={{ color: "blue" }}>{product.productName}</h2>
      <img style={{ width: "500px", height: "300px" }} />
      <p>상품번호: {product.productNumber}</p>
      <p>가격: {Number(product.productPrice).toLocaleString()}원</p>
      <p>사이즈: {product.productSize}</p>
      <p>평점: {product.productRating}</p>
      <p>리뷰: {product.productReview}</p>
      <S.Review>
        <h4>* 리뷰 모음 *</h4>
        <p>
          {product.Review &&
            product.Review.map((item) => {
              console.log(item);
              return (
                <ul>
                  <li>{item.reviewer}</li>
                  <li>{item.review}</li>
                  <li>{item.rating}</li>
                </ul>
              );
            })}
        </p>
      </S.Review>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
      */}
      {productNumber.productNumber}
    </S.Wrapper>
  );
}
export default DetailPage;

const Wrapper = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  text-align: center;

  p {
    margin: 30px 0px;
  }
  li {
    list-style: none;
  }
`;

const Review = styled.div`
  width: 100%;
  position: absolute;
  border: 1px solid lightblue;
`;

const S = {
  Wrapper,
  Review,
};
