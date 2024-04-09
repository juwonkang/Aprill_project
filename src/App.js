import React, { useEffect } from 'react'
import TypeIt from 'typeit-react'
import './App.css'
import ScrollOut from 'scroll-out'

const App = () => {
  useEffect(() => {
    ScrollOut({
      targets: '.part', // part 클래스를 가진 요소를 대상으로 설정
    })
  }, [])

  return (
    <>
      <div className="app">
        <div className="container1">
          <div className="part1">
            <TypeIt
              className="maintext"
              options={{
                speed: 100, // 글자 속도: 기본값은 100
                lifeLike: true, // 텍스트가 한 번에 나타나도록 설정
                cursor: false, // 깜빡이는 커서 제거
              }}
            >
              MY BAG
            </TypeIt>
          </div>
          <div className="part2">
            <TypeIt
              className="maintext"
              options={{
                speed: 100, // 글자 속도: 기본값은 100
                lifeLike: true, // 텍스트가 한 번에 나타나도록 설정
                cursor: false, // 깜빡이는 커서 제거
              }}
            >
              ONE
            </TypeIt>
          </div>
          <div className="part3">
            <TypeIt
              className="maintext"
              options={{
                speed: 100, // 글자 속도: 기본값은 100
                lifeLike: true, // 텍스트가 한 번에 나타나도록 설정
                cursor: false, // 깜빡이는 커서 제거
              }}
            >
              ONLY
            </TypeIt>
          </div>
        </div>
        <div className="container2"></div>
        <div className="container3">
          <div className="part1">
            <h1 className="maintext">MY BAG</h1>
          </div>
          <div className="part2">
            <h1 className="maintext">ONE</h1>
          </div>
          <div className="part3">
            <h1 className="maintext">ONLY</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
