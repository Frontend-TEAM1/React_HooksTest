import { useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const [titleInput, setTitleInput] = useState('');
  const [artistInput, setArtistInput] = useState('');

  const onChangeInputTitle = (e) => {
    setTitleInput(e.target.value);
  };

  const onChangeInputArtist = (e) => {
    setArtistInput(e.target.value);
  };

  const onClickAddBtn = () => {
    const title = titleInput;
    const signer = artistInput;
    if(!title || !signer) return;
    const newObj = {
      title,
      signer,
    };
    setPlayList([...playList, newObj]);
  };

  const onClickDeleteBtn = () => {
    const item = playList.findIndex((item) => item.title.toLowerCase() === titleInput.toLowerCase());
    if(item === -1) return;
    playList.splice(item, 1);
    setPlayList([...playList]);
  };
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log('PlayListMock.playlist', PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playList.map((item) => {
          return (
            <li>
              <h3>{item.title}</h3>
              <p>{item.signer}</p>
            </li>
          );
        })}
      </ul>
      <div>
        <p>
          곡명 : <input onChange={onChangeInputTitle} value={titleInput} />
        </p>
        <p>
          가수/작곡 : <input onChange={onChangeInputArtist} value={artistInput} />
        </p>
        <p>
          <button onClick={onClickAddBtn}>추가</button>
          <button onClick={onClickDeleteBtn}>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;
