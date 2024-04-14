import React, { useState, useEffect } from 'react'
import './shoppage.css'
import Footter from '../components/footter'

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
  const handleBuyClick = () => {
    window.location.href =
      'https://litt.ly/zdsoccer?fbclid=PAAaablFhykAzCzynofxlhVvtEjb6C87e5ReEesyGjQ_sEicahikx8l99dpWI_aem_AZHe3zaKJhMiKV00Oq39GWsHYUCrcnO0XTkRE7Bf7ChM5HfUjewaR4l5hG-68cGl80k'
  }

  return (
    <>
      <div className="container">
        <div className="imagebox">
          <div className="train">
            <div
              className="show"
              style={{ transform: `translateX(${translateValue}px)` }}
            >
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
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', padding: '10px' }}>
            국산 신발 주머니 보조가방 실내화 가방 신주머니
          </h1>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '30px auto',
              padding: '10px',
            }}
            className="count"
          >
            <h2 style={{ color: 'red' }}>50%</h2>
            <h2 style={{ color: 'red', fontWeight: 'bold' }}>35,000원</h2>
          </div>
          <div className="salebox">
            <h1 style={{ padding: '10px' }}>ZD 고객을 위한 혜택</h1>
            <hr />
            <div
              className="pointbox"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '30px auto',
                padding: '10px',
              }}
            >
              <h2>최대 적립포인트</h2>
              <h2>1350원</h2>
            </div>
            <div
              className="morepointbox"
              style={{
                border: '1px solid lightgray',
                width: '300px',
                height: '100px',
                textAlign: 'center',
                margin: '30px auto',
              }}
            >
              <h2>Tip. 포인트 더 받는 방법</h2>
              <p>최대 5% 적립, 무료 시작</p>
              <p>네이버 현대카드로 결제시</p>
              <p>네이버페이 머니 결제시 최대 적립</p>
            </div>
            <div
              className="eventbox"
              style={{
                border: '1px lightgray solid',
                width: '350px',
                height: '50px',
                display: 'flex',
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <h1>놓치고 있는 5% 적립 포기하시겠어요?</h1>
            </div>
            <div
              className="buybox"
              style={{
                border: '1px lightgray solid',
                width: '350px',
                height: '50px',
                margin: '100px auto',
                textAlign: 'center',
                backgroundColor: 'lightgreen',
              }}
            >
              <button
                type="button"
                onClick={handleBuyClick}
                style={{ margin: '0 auto', width: '350px', height: '50px' }}
              >
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Footter />
    </>
  )
}

export default Shoppage
