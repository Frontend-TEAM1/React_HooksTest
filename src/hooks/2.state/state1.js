import PlayListMock from "../../__mock__/playList.json";
import { useRef, useState } from "react";

function State1() {
  /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버턴을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

  // console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */

  const [title, setTitle] = useState('');
  const [singer, setSinger] = useState('');
  const [playList, setPlayList] = useState(PlayListMock.playlist);


  const getTitle = (e) => {
    setTitle(e.target.value);
  }

  const getSinger = (e) => {
    setSinger(e.target.value);
  }

  const addToList = () => {
    const newSong = {title, singer};
    const newPlayList = [...playList, newSong];
    setPlayList(newPlayList);
  }

  const removeList = () => {
    const newPlayList = playList.filter((song) => song.title !== title)
    setPlayList(newPlayList);
  } 

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {/* list */}
        {/* 예시 데이터입니다 */}
        {playList.map((song) => (
          <li>
            <h3>{song.title}</h3>
            <p>{song.singer}</p>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input onChange={getTitle}/>
        </p>
        <p>
          가수/작곡 : <input onChange={getSinger}/>
        </p>
        <p>
          <button onClick={addToList}>추가</button>
          <button onClick={removeList}>삭제</button>
        </p>
      </div>
    </>
  );
}
export default State1;
