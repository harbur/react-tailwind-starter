import { MultiLines } from 'components/MultiLines';
import React, { useEffect, useRef } from 'react';

export default function FullScreenWithHeader() {
  const messagesEndRef = useRef<any>(null)
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current && typeof messagesEndRef.current.scrollTo !== 'undefined') {
        messagesEndRef.current.scrollIntoView()
      }
    }
    scrollToBottom()
  }, []);

  return (
    <div className="flex-auto">
      {/* <div className="flex flex-col bg-red-500"> */}
        {/* <div className="placeholder text-xl">Page 1</div>
        <div className="placeholder flex-none">1</div>
        <div className="placeholder flex-auto overflow-auto"> */}
          <MultiLines />
        {/* </div> */}
        <div ref={messagesEndRef} />
      {/* </div> */}
    </div>
  )
}