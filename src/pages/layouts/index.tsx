import React from 'react';
import FullScreenWithHeader from './FullScreenWithHeader';

export default function Layouts() {
  return (
    <>
      <FullScreenWithHeader />
    </>
  )
}

function FlexInitial() {
  return (
    <>
      <div className="flex bg-gray-200">
        <div className="flex-initial placeholder">Short</div>
        <div className="flex-initial placeholder">Medium length</div>
      </div>

      <div className="flex bg-gray-200">
        <div className="flex-initial placeholder">Short</div>
        <div className="flex-initial placeholder">Medium length</div>
        <div className="flex-initial placeholder">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad labore ipsam, aut rem quo repellat esse tempore id, quidem
        </div>
      </div>
    </>
  )
}

function Flex1() {
  return (
    <div className="flex bg-gray-200">
      <div className="flex-1 placeholder">Short</div>
      <div className="flex-1 placeholder">Medium length</div>
      <div className="flex-1 placeholder">Significantly larger amount of content</div>
    </div>
  )
}

function FlexAuto() {
  return (
    <div className="flex bg-gray-200">
      <div className="flex-auto placeholder">Short</div>
      <div className="flex-auto placeholder">Medium length</div>
      <div className="flex-auto placeholder">Significantly larger amount of content</div>
    </div>
  )
}

function FlexNone() {
  return (
    <div className="flex bg-gray-200">
      <div className="flex-1 placeholder">Item that can grow or shrink if needed</div>
      <div className="flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">Item that cannot grow or shrink</div>
      <div className="flex-1 placeholder">Item that can grow or shrink if needed</div>
    </div>
  )
}

function FlexResponsive() {
  return (
    <div className="flex bg-gray-200">
      <div className="flex-1 placeholder">Item that can grow or shrink if needed</div>
      <div className="flex-none sm:flex-1 md:flex-auto lg:flex-initial xl:flex-1 placeholder">Responsive flex item</div>
      <div className="flex-1 placeholder">Item that can grow or shrink if needed</div>
    </div>
  )
}