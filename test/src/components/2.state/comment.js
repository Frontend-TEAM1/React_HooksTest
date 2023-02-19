import { useState } from 'react';
import styled from 'styled-components';

function Comment({ user, content, handleChangeContent, onDeleteBtn }) {
  // const {id, User, myComment} = user
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const onEditBtn = () => {
    setIsEdit(true);
  };

  const onCompleteEditBtn = () => {
    if (content === editContent) return setIsEdit(false);
    handleChangeContent(user.id, editContent);
    setIsEdit(false);
  };
  const onChangeEditContent = (e) => {
    setEditContent(e.target.value);
  };


  return (
    <S.CommentItem>
      <p>
        작성자: <span>{user.User.nickname}</span>
      </p>
      <p>
        댓글 내용:{' '}
        <span>
          {isEdit ? <input onChange={onChangeEditContent} value={editContent} /> : user.content}
        </span>
      </p>
      {user.myComment && (
        <>
          <button onClick={isEdit ? onCompleteEditBtn : onEditBtn}>수정</button>
          <button onClick={()=>onDeleteBtn(user.id)}>삭제</button>
        </>
      )}
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
