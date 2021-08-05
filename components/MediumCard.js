import React from 'react'
import Image from 'next/image'

const MediumCard = ({ img, title }) => {
  return (
    <div>
      <div className="relative h-80 w-80 hover:scale-105 transition ease-in-out">
        <Image src={img} layout="fill" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard
