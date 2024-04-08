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
                speed: 100,
                cursor: false,
                fontSize: '36px',
              })

            // Remember to return it!
            return instance
          }}
        />
      </div>
      <div className="introbox">
        <div className="part" data-scroll>
          <img src="IMG_6287.jpg" alt="young" />
        </div>
        <div className="part">
          <img src="IMG_4733 2.jpg" alt="old" />
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
