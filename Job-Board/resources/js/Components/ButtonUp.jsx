import React from 'react'

const ButtonUp = () => {

    const handleClick = () => {
        console.log(window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        }));
    }

  return (
    <div>
        <button className="h-13  hover:h-14 w-10 bg-green-300 hover:bg-green-400 flex justify-center items-center fixed bottom-6 right-8 cursor-pointer text-white text-4xl font-bold transform rounded-md"
        onClick={handleClick}>↑</button>
        </div>
  )
}

export default ButtonUp

