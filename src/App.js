import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit-react'
import './App.css'
import ScrollOut from 'scroll-out'

const App = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다.
      const scrollY = window.scrollY || document.documentElement.scrollTop

      // 예시: 스크롤 위치에 따라 투명도 조절
      // 스크롤 위치가 200px 이상이면 container1은 투명하게, container2는 불투명하게
      if (scrollY >= 700) {
        setScrollOpacity(0) // container1을 투명하게
      } else {
        setScrollOpacity(1) // container1을 불투명하게
      }
    }

    // 스크롤 이벤트 리스너를 추가하고, 컴포넌트가 unmount될 때 제거합니다.
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="app">
        <div className="container1" style={{ opacity: scrollOpacity }}>
          <div className="part1">
            <TypeIt
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              MY BAG
            </TypeIt>
          </div>
          <div className="part2">
            <TypeIt
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              ONE
            </TypeIt>
          </div>
          <div className="part3">
            <TypeIt
              className="maintext"
              options={{
                speed: 100,
                lifeLike: true,
                cursor: false,
              }}
            >
              ONLY
            </TypeIt>
          </div>
        </div>
        <div className="container2">
          <div className="maintext1">
            <h1>
              하나
              <br />
              세상 하나 뿐인 내 것
            </h1>
            <p>내가 좋아하는 선수를 더 오래 더 강렬하게 기억할수있습니다.</p>
          </div>
        </div>
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
