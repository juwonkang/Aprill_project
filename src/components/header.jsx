import React from 'react'

const header = () => {
  return (
    <div className="bg-blue-900">
      <header className="flex items-center justify-between py-4 px-8">
        <img alt="Logo" className="h-8" />
        <h2 className="text-white text-xl font-bold">상단바 제목</h2>
        <nav>
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
      </header>
    </div>
  )
}

export default header
