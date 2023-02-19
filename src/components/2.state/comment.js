import { useState } from "react";
import styled from "styled-components";

function Comment({ comment, post, handleDelete }) {
  
  const { User, content,myComment } = comment;
 //comment 객체에서 User, content, myComment 속성 값을 추출하여 변수에 할당

  //Q2

  //수정버튼
  const [isEditMode, setIsEdit] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEdit = () => {
    setIsEdit(true);
  };
  

  const handleSave = () => {
    post.Comments.forEach((c) => {
      if (c === comment) {
        c.content = newContent;
      }
    });
    setIsEdit(false);
  };
  /*
  map은 배열의 각 요소를 변환하여 기존 배열을 변경하지 않고
   새로운 배열을 반환 새로운 배열을 반환
   
  수정 기능에서는 변경된 댓글 객체를 반환해야 하므로, forEach

  comment와 동일한 객체를 찾아 
  해당 객체의 content 값을 newContent로 변경
  */

  const handleCancel = () => {
    setIsEdit(false);
    setNewContent(content);
  };
  /*
  setIsEdit(false)를 호출하여 isEdit 상태를 false로 변경함으로써, 
  수정 모드에서 다른 모드로 다시 전환
  */

  const handleContentChange = (event) => {
    setNewContent(event.target.value);
  };
  //newContent 업데이트

  

  return (
    <S.CommentItem>
      <p>
        작성자: <span>{User.nickname}</span>
      </p>
      {isEditMode ? (
        <>
          <input value={newContent} onChange={handleContentChange} />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancel}>취소</button>
        </>
      ) : (
        <>
        <p>
          댓글 내용: <span>{content}</span>
        </p>
         <button onClick={handleEdit}>수정</button>
      </>
    )}
    {myComment && <button onClick={()=>handleDelete(User.id)}>삭제</button>}
    </S.CommentItem>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
`;

const S = {
  CommentItem,
};
