import React from 'react'

export const Header = function () {
  return (
    <header className="bg-red-500 w-full">
      <div className="container mx-auto h-10 bg-blue-500 flex justify-between items-center">
        <div className="w-4 h-4 flex flex-col gap-1">
          <div className="w-full h-[2px] relative bg-white" />
          <div className="w-full h-[2px] relative bg-white" />
          <div className="w-full h-[2px] relative bg-white" />
        </div>
        <div>
          <div className="w-8 h-8 rounded-full bg-gray-500" />
        </div>
      </div>
    </header>
  )
}
