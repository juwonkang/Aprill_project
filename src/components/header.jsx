import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  // 현재 경로 가져오기
  const location = useLocation()

  // 현재 경로가 "/shoppage"인지 여부를 나타내는 isShopPage 변수
  const isShopPage = location.pathname === '/shoppage'

  return (
    <div className="bg-black">
      <header className="flex items-center justify-between py-4 px-8 fixed w-full top-0 z-10">
        {/* 로고 */}
        <div className="flex items-center">
          <img src="baseballlogo.png" alt="Logo" className="h-10" />

          {/* 메뉴 */}
          <nav className="ml-8">
            <ul className="flex space-x-10">
              <li>
                {/* Link 컴포넌트를 사용하여 메뉴1을 클릭하면 /shoppage로 이동 */}
                <Link
                  to="/shoppage"
                  className={
                    isShopPage
                      ? 'text-black hover:text-gray-300'
                      : 'text-white hover:text-gray-300'
                  }
                >
                  쇼핑
                </Link>
              </li>
              <li>
                {/* 다른 메뉴들도 동일한 방식으로 처리 */}
                <Link
                  to="#"
                  className={
                    isShopPage
                      ? 'text-black hover:text-gray-300'
                      : 'text-white hover:text-gray-300'
                  }
                >
                  메뉴2
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className={
                    isShopPage
                      ? 'text-black hover:text-gray-300'
                      : 'text-white hover:text-gray-300'
                  }
                >
                  메뉴3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
