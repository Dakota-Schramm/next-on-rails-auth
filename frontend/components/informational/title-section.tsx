import React from 'react'

interface TitleSectionProps {
  title: string;
  description: string | string[];
}

const TitleSection = ({title, description}: TitleSectionProps) => {
  return (
    <section className='flex-col space-y-1.5'>
      <h2>{title}</h2>
      <DescriptionBlock {...{description}} />
    </section>
  )
}

interface DescriptionBlockProps {
  description: string | string[];
}

const DescriptionBlock = ({description}: DescriptionBlockProps) => {
  const pStyle = "";

  if (typeof description === 'string') {
    return (
      <p className={pStyle}>{description}</p>
    )
  } else if (Array.isArray(description) && description.every(item => typeof item === 'string')) {
    const descMap = description.map(paragraph => (
      <p className={pStyle}>{paragraph}</p>
    ))
    return <>{descMap}</>  
  } else {
    throw Error('Passed in incorrect type for description: ' + typeof description)
  }
}

export default TitleSection