import React, { useState, useEffect } from 'react'
import './shoppage.css'

const Shoppage = () => {
  const [translateValue, setTranslateValue] = useState(0)
  const trainCompartment = [
    '/62471EA2-0190-48AB-A8CD-9070D64F6728.jpg', // 이미지 파일의 경로
    '/IMG_1365 2.jpg',
    '/IMG_1363.jpg',
    '/IMG_1364.jpg',
    '/IMG_1366.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide()
    }, 2500)

    return () => {
      clearInterval(interval)
    }
  }, [translateValue])

  const handleNextSlide = () => {
    const slideWidth = 600 // 각 슬라이드의 너비
    const maxTranslate = (trainCompartment.length - 1) * -slideWidth

    if (translateValue > maxTranslate) {
      setTranslateValue(translateValue - slideWidth)
    } else {
      setTranslateValue(0) // 마지막 이미지에서 처음으로 돌아감
    }
  }

  const handlePrevSlide = () => {
    const slideWidth = 600 // 각 슬라이드의 너비
    const minTranslate = 0

    if (translateValue < minTranslate) {
      setTranslateValue(translateValue + slideWidth)
    }
  }

  return (
    <div className="container">
      <div className="imagebox">
        <div className="train">
          <div className="show" style={{ transform: `translateX(${translateValue}px)` }}>
            {trainCompartment.map((item, index) => (
              <div className="compartment" key={index}>
                <div style={{ width: '600px', height: '600px' }}>
                  <img
                    src={item}
                    alt="Compartment"
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <h1 className="itemtitle">유니폼으로 가방 새롭게 탄생!</h1>
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="purchasebox">
        <h1>국산 신발 주머니 보조가방 실내화 가방 신주머니</h1>
        <div
          style={{ display: 'flex', justifyContent: 'space-between' }}
          className="count"
        >
          <h2 style={{ color: 'red' }}>50%</h2>
          <h2 style={{ color: 'red', fontWeight: 'bold' }}>35,000원</h2>
        </div>
        <div className="salebox">
          <h1>ZD 고객을 위한 혜택</h1>
          <hr />
          <div
            className="pointbox"
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <h2>최대 적립포인트</h2>
            <h2>1350원</h2>
          </div>
          <div
            className="morepointbox"
            style={{ border: '1px solid black', width: '300px', height: '100px' }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Shoppage
