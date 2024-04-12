import React, { useEffect, useState } from 'react'
import TypeIt from 'typeit-react'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    // 스크롤 이벤트 리스너 추가
    const handleScroll = () => {
      // 현재 스크롤 위치를 가져옵니다.
      const scrollY = window.scrollY || document.documentElement.scrollTop

      // 예시: 스크롤 위치에 따라 투명도 조절
      // 스크롤 위치가 700px 이상이면 container1은 투명하게, container2는 불투명하게
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
        <section className="container1" style={{ opacity: scrollOpacity }}>
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
        </section>
        <section className="container2">
          <div className="maintext1">
            <Link to="/shoppage">
              <button className="btn" type="button">
                바로 보러가기 ___
              </button>
            </Link>
          </div>
        </section>
        <section className="container3"></section>
        <div className="h-32 bg-white text-center w-full bottom-0">
          <br />
          <br />
          ZD_Soccer <br /> Company: 제트디(ZD) | 대표: JANG YOHAN & KANG JUWON
          <br /> Business License: 175-20-01543
          <br /> 경기도 성남시 중원구 둔촌대로135번길 4<br /> 통신판매번호:
          2024-성남중원-0159
          <br />
          <br /> 고객센터
          <br /> https://pf.kakao.com/_PGxjrxj/chat
          <br /> phone: 070-7116-2799 (AM.10 - PM.5, Lunch PM.1 - PM.2, Weekend and
          Holiday Off)
          <br /> 이용약관 개인정보처리방침
        </div>
      </div>
    </>
  )
}

export default App
