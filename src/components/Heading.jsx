import React from 'react'

const Heading = () => {
  const name=prompt('Enter your name');
  return (
    <div className="container mx-auto text-center font-bold text-4xl py-5 my-5 text-gray-700 ">
        {name}'s TodoList
    </div>
  )
}

export default Heading