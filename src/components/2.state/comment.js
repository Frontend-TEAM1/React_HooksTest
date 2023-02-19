import { useState } from "react";
import styled from "styled-components";

function Comment({ com, index, onDeleteClick }) {

  const [isEdit, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState(com.content);

  const onEditClick = () => {
    setIsEdit((prev) => !prev);
  }


  return (
    <S.CommentItem>
            <p>
              작성자: <span>{com.User.nickname}</span> 
              <br />
              댓글 내용: {isEdit ? <textarea onChange={(e) => setNewContent(e.target.value)}>{newContent}</textarea> : <span>{newContent}</span>} 
              <br />
              {com.myComment && <button onClick={onEditClick}>{isEdit ? 'Save' : 'Edit'}</button>}
              <span>   </span>
              {com.myComment && <button onClick={() => onDeleteClick(index)}>Delete</button>}
            </p>
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  margin: 0 auto;
  width:70%;
  border: 1px solid #000;
  padding: 10px;
`;

const S = {
  CommentItem,
};
