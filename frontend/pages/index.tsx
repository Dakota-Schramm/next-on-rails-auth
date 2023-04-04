import type { NextPage } from 'next'

import Signup from '../components/forms/signup';

const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen space-x-8 lg:flex-row">
      <img
        src='/placeholder.png'
        alt='A placeholder image'
      />
      <Signup /> 
    </section>
  )
}

export default Home
