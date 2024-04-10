import React from 'react'

const modal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded shadow-lg z-50">
        <h2 className="text-2xl font-bold mb-4">모달 타이틀</h2>
        <p>
          모달 내용 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, magni!
        </p>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            확인
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default modal
