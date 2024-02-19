import React from 'react'
import { TestStudent } from '../components/TestStudent'
import { Header } from '../components/Header'

export const AITest = () => {
  return (
    <>
    <div className='h-screen'>
      <Header/>
      <div className='py-10 bg-green-2 flex justify-center items-center font-body-2-body-2' >
    <TestStudent/>
    </div> 
    </div>
   
    </>
    
  )
}
