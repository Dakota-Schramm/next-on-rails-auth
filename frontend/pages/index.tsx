import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen space-x-8 lg:flex-row">
      <img
        src='/placeholder.png'
        alt='A placeholder image'
      />
      <form action="" method="post" className="flex flex-col p-3 space-y-2 bg-gray-500 rounded-md">
        <header className='mb-4 space-y-4 text-3xl'>
          <section className='flex items-center'>
            <img
              src='/favicon.ico'
              alt='Company logo'
            />
            <h2>Untitled App</h2>
          </section>
          <h3>Sign up</h3>
        </header> 
        <section className='flex flex-col space-y-2'>
          <label>
            <input className='border border-black border-solid rounded-lg' 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name"
              required 
            />
          </label>
          <label>        
            <input className='border border-black border-solid rounded-lg' 
              type="email" 
              name="email" 
              id="email" 
              required 
              placeholder="Email"
            />
          </label>
          <label className='w-[250px]'>
            <input
              type='checkbox'
              name='updates'
              id='updates'
              className='mr-2'
            />
            Sign up for emails to get updates from Untitled App products, offers and your Member benefits.
          </label>
        </section>
        <footer className='space-y-[10px] flex flex-col items-center text-center'>
          <button className='p-1 bg-blue-600 border border-black border-solid rounded-lg'>
            Create an account
          </button>
          <p className='w-[250px]'>
            By continuing, you are indicating that you have read and agree to the <a href='/tos'>Terms of Service</a> and <a href='privacy'>Privacy Policy.</a>
          </p>
          <p>
            Already a member? <a href='/sign-in'>Sign in</a>
          </p>
        </footer>
      </form>
    </section>
  )
}

export default Home
