import LineWithAnimation from '@/components/LineWithAnimation'
import React from 'react'

export default function index() {
  return (
    <div className='p-5 bg-black'>
      <LineWithAnimation text={"Wokflow Management"} percentage={"69%"}/>
      <LineWithAnimation text={"IT Practice in Cloud"} percentage={"58%"}/>
      <LineWithAnimation text={"Software For Financial"} percentage={"75%"}/>
    </div>
  )
}
