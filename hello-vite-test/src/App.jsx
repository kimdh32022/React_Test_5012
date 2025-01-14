import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [count, setCount] = useState(0)

  //JSX 라는 문법은 , 우리가 보기에는 마치 HTML 문법 처럼 보이지만, 


  // JSX 문법이고, 실제 동작은 위의 
  // 실제 동작은. 
  // return React.createElement("div", null, "Hello ", React.createElement ("b", null, "react"));

  // const name = "리액트";
  // const name = 0;
  const name = undefined;

  // return (
  // 순서1
  // <div>
  //   Hello 리액트 
  // </div>

  //순서2
  // <div> 
  // 순서3
  // <fragment>
  // 순서4
  // <>
  //   <h1>리액트 안녕!</h1>
  //   <h2>잘 작동하니? {name}</h2>
  // </>
  // </fragment>
  // </div>
  //순서5
  // <div>
  //   {name === '리액트2' ? (
  //     <h1>리액트입니다.</h1>
  //   ) : (
  //     <h2>리액트가 아닙니다.</h2>
  //   )}
  // </div>

  //순서6
  // A && B, A 참인 경우만, B를 그려준다.
  // 조건이 거짓 일 때, null 반환를 하면, 화면에 아무것도 그리지 않음. 

  // <div>
  //   {
  //     //순서7
  //     // name === '리액트2' && <h1>리액트입니다.</h1>
  //     // name && <h1>리액트입니다.</h1>
  //     // name;
  //   }
  // </div>
  // 순서8, undefined  출력 시 오류 발생 확인.-> 널 처럼 아무것도 출력을 안하는 상태. 


  // )
  // 순서 9, or 연산자를 이용하는 방법. 앞에 변수가 출력이 안되는 상황을 대비할 경우. 
  return name || '값이undefined입니다.';
}

export default App
