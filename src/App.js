import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit-react'
import './App.css'
import ScrollOut from 'scroll-out'
import { Link } from 'react-router-dom'

const App = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다.
      const scrollY = window.scrollY || document.documentElement.scrollTop
      // console.log(scrollY)

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
            <Link to="/shoppage">
              <button className="btn" type="button">
                바로 보러가기 ___
              </button>
            </Link>
          </div>
        </div>
        <div className="container3"></div>
      </div>
    </>
  )
}

export default App
