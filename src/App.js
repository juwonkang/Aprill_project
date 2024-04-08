import React from 'react'
import TypeIt from 'typeit-react'
import './App.css'

const App = () => {
  return (
    <>
      <div className="app">
        <TypeIt
          className="firsttext"
          getBeforeInit={(instance) => {
            instance
              .type("Hi, I'm Alex")
              .pause(750)
              .delete(4)
              .pause(500)
              .type('John!')
              .options({
                speed: 100, // 타이핑 속도
                cursor: false, // 커서 숨김
                fontSize: '36px', // 글씨 크기
                // 원하는 다른 스타일 속성들을 추가할 수 있습니다.
              })

            // Remember to return it!
            return instance
          }}
        />
      </div>
      <div className="introbox">
        <div className="part">
          <img src="IMG_6287.jpg" alt="young"></img>
        </div>
        <div className="part">
          <img src="IMG_4733 2.jpg" alt="old"></img>
        </div>
        <div className="part"></div>
        <div className="part"></div>
        <div className="part"></div>
        <div className="part"></div>
      </div>
    </>
  )
}

export default App
