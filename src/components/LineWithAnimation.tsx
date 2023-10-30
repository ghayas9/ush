import React from 'react'
interface LineWithAnimationProps {
  text: string;
  percentage: string;
}
export default function LineWithAnimation({text ,percentage}:LineWithAnimationProps) {
  return (
    <div className="flex flex-col w-full my-5">
      <div style={{width:percentage}} className='flex flex-col h-[35px] justify-between'>
        <div className="flex justify-between text-[#00FBF4] font-['Montserrat sans-serif']">
          <h1 className='text-[16px] font-semibold'>{text}</h1>
          <span className='text-[16px] font-light'>{percentage}</span>
        </div>
        <div className='bg-white animated-div h-[3px] w-[100%]'>
        </div>
      </div>
    </div>
  )
}
