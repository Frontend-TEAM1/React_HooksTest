import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { priceShow } from '../hooks/2.state/state3';
import productList from '../__mock__/products.json';
function DetailPage() {
  const params = useParams();
  const { productNumber } = params;
  const [List, setList] = useState(productList);
  const [comment, setComment] = useState();

  const product = List.products.find((product) => product.productNumber === productNumber);
  console.log(product);
  const {
    Review,
    productDetail,
    productName,
    productPrice,
    productRating,
    productReview,
    productSize,
  } = product;

  // console.log(List.products.find((product)=>product === product));
  // console.log(product);

  const ratingStar = (rating) => {
    let star = '';
    const fillStar = '★';
    const blankStar = '☆';
    for (let i = 0; i < rating; i++) {
      star += fillStar;
    }
    for (let i = 0; i < 5 - rating; i++) {
      star += blankStar;
    }
    return star;
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  }
  const onCommentSubmit = () => {
    if(!comment) return;
    const review = {
      reviewer: '작성자',
      review: comment,
      rating: Math.floor(Math.random()*6),
    }
    product.Review.push(review);
    setList({...List});
    setComment('');
  }
  return (
    <div>
      {/* 
      상세 페이지는 자유롭게 꾸미시면 됩니다.
      아직 해당 부분의 진도가 나가지 않았기 때문에 주소의 파람을 가지고 올 수 있는 방법은
      미리 콘솔에 찍어두었습니다.

      단, 없는 번호 상품으로 접근 시 state페이지로 돌아가도록 구현해주세요
    */}
      {params.productNumber}
      <S.Img>상품이미지</S.Img>
      <S.Content>{productDetail.productDetailInfo}</S.Content>
      <h4>{productName}</h4>
      <p>상품번호: {productNumber}</p>
      <p>가격: {priceShow(productPrice)}</p>
      <p>사이즈: {productSize}</p>
      <p>평점: {productRating}</p>
      <p>리뷰: {productReview}</p>
      {Review.map((review) => {
        return (
          <S.Review>
            <div>{review.reviewer}</div>
            <div>{review.review}</div>
            <div>{ratingStar(review.rating)}</div>
          </S.Review>
        );
      })}
      <S.Comment>
        <textarea onChange={onChangeComment} placeholder="댓글을 작성해주세요" value={comment}></textarea>
        <button onClick={onCommentSubmit}>작성</button>
      </S.Comment>
    </div>
  );
}
export default DetailPage;

const Img = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;

const Content = styled.div`
  border: 1px solid black;
  padding: 20px;
  width: 50%;
  margin: 10px auto;
`;

const Review = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 20px auto;
  border: 1px solid black;
  padding: 20px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin: 50px auto;
  height: 15vh;
  & > textarea {
    width: 90%;
    height: 100%;
    font-size: 1.2rem;
  }
  & > button {
    width: 10%;
    height: 50%;
    padding: 20px;
    margin-left: 10px;
  }
`;

const S = {
  Img,
  Content,
  Review,
  Comment,
};
