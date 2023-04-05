import React from 'react'

interface TitleProps {
  title: string;
  description: string | string[];
}

const Title = ({title, description}: TitleProps) => {
  return (
    <>
      <h1 className='text-2xl font-bold underline'>{title}</h1>
      <p className='text-xl font-semibold'>{description}</p>
    </>
  )
}

export default Title