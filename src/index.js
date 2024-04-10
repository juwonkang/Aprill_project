import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Header from './components/header'
import ShopPage from './pages/shoppage'
import Footter from './components/footter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* "/" 경로로 들어왔을 때 ShopPage를 렌더링 */}
        <Route path="/shoppage" element={<ShopPage />} />
        {/* "/app" 경로로 들어왔을 때 App 컴포넌트를 렌더링 */}
        <Route path="/" element={<App />} />
        {/* 다른 경로들에 대한 Route 설정 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
