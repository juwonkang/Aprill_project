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
    }, 25000)

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
      <div className="purchasebox">
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
      <div className="imagebox"></div>
    </div>
  )
}

export default Shoppage
