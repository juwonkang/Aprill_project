import React from 'react'

const Header = () => {
  return (
    <div className="bg-black">
      <header className="flex items-center justify-between py-4 px-8 fixed w-full top-0 z-10">
        {/* 로고 */}
        <div className="flex items-center">
          <img src="baseballlogo.png" alt="Logo" className="h-8" />

          {/* 메뉴 */}
          <nav className="ml-4">
            <ul className="flex space-x-4">
              <li>
                <a href="www.naver.com" className="text-white hover:text-gray-300">
                  메뉴1
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  메뉴2
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  메뉴3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
