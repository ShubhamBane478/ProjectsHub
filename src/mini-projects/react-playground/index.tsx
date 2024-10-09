import React from 'react'
// import DataFetching from '../../react-basics/dataFetching'
import ReactQuery from '../../react-basics/ReactQuery'
import QueryContext from '../../context/QueryContext'

const PlaygroundReact = () => {
  return (
    <>
    <div 
    className='flex flex-col justify-center items-center w-full h-screen bg-black text-white'>
        {/* > */}
        <QueryContext>
        <ReactQuery/>
        </QueryContext>
        
        </div>
    </>
  )
}

export default PlaygroundReact